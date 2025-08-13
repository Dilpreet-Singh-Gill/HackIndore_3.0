import React from 'react'
import { Icon } from '@/components/Icons';
import styles from './Social.module.css'
import { socialMedia } from '@/util/config';
import { Container } from 'react-bootstrap';

const Social = () => (
    <div className={styles.StyledSideElement}>
        <Container>
            <ul className={styles.StyledSocialList}>
                {socialMedia && socialMedia.map(({ url, name }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                            <Icon name={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </Container>
    </div>
);


export default Social;