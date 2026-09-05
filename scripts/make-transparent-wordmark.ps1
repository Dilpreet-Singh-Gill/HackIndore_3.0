# One-off asset step: the source wordmark is white-on-black, so we convert
# luminance into the alpha channel to get a transparent PNG with clean edges.
param(
    [Parameter(Mandatory = $true)][string]$Source,
    [Parameter(Mandatory = $true)][string]$Destination
)

Add-Type -AssemblyName System.Drawing

Add-Type -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class WordmarkConverter
{
    public static void Convert(string source, string destination)
    {
        using (Bitmap src = new Bitmap(source))
        {
            int w = src.Width;
            int h = src.Height;

            using (Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                Rectangle rect = new Rectangle(0, 0, w, h);

                BitmapData sd = src.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData dd = dst.LockBits(rect, ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

                int bytes = Math.Abs(sd.Stride) * h;
                byte[] sBuf = new byte[bytes];
                byte[] dBuf = new byte[bytes];
                Marshal.Copy(sd.Scan0, sBuf, 0, bytes);

                for (int i = 0; i < bytes; i += 4)
                {
                    byte b = sBuf[i];
                    byte g = sBuf[i + 1];
                    byte r = sBuf[i + 2];

                    // Brightest channel becomes the coverage/alpha value.
                    byte a = r > g ? r : g;
                    if (b > a) a = b;

                    dBuf[i] = 255;
                    dBuf[i + 1] = 255;
                    dBuf[i + 2] = 255;
                    dBuf[i + 3] = a;
                }

                Marshal.Copy(dBuf, 0, dd.Scan0, bytes);
                src.UnlockBits(sd);
                dst.UnlockBits(dd);

                dst.Save(destination, ImageFormat.Png);
            }
        }
    }
}
"@ -ReferencedAssemblies System.Drawing

[WordmarkConverter]::Convert((Resolve-Path $Source).Path, $Destination)

$info = New-Object System.Drawing.Bitmap $Destination
Write-Output ("wrote {0}  {1}x{2}" -f $Destination, $info.Width, $info.Height)
$info.Dispose()
