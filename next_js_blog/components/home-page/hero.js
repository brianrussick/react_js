import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/pic.jpg' alt='An image showing Brian' width={300} height={300} />
            </div>
            <h1>Hi, my name is Brian</h1>
            <p>I blog about web development - especially frontend libraries like React.</p>
        </section>
    )
}

export default Hero;
