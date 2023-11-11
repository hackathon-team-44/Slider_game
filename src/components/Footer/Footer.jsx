import { Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import classes from './Footer.module.css';


export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group className={classes.links}>
          <div className={classes.item}>Создатели</div>
          <div className={classes.item}>Правила игры</div>
          {/* <div className={classes.item}>item</div> */}
          </Group>
      </Container>
    </div>
  );
}