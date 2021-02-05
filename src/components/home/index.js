import Button from '../button';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <div id='left-menu'>
        <p>Colors</p>
        <p>Typography</p>
        <p>Spaces</p>
        <p>Buttons</p>
        <p>Inputs</p>
        <p>Grid</p>
      </div>
      <div id='main'>
        <h2>Buttons</h2>
        <div>
          <div>
            <p>&lt;Button /&gt;</p>
            <Button>Default</Button>
          </div>
          <div>
            <p>&:hover, &:focus</p>
            <Button hover={true}>Default</Button>
          </div>
        </div>
        <div>
          <div>
            <p>&lt;Button variant="outline" /&gt;</p>
            <Button variant='outline'>Default</Button>
          </div>
          <div>
            <p>&:hover, &:focus</p>
            <Button variant='outline' hover={true}>
              Default
            </Button>
          </div>
        </div>
        <div>
          <div>
            <p>&lt;Button variant="text" /&gt;</p>
            <Button variant='text'>Default</Button>
          </div>
          <div>
            <p>&:hover, &:focus</p>
            <Button variant='text' hover={true}>
              Default
            </Button>
          </div>
        </div>
        <div>
          <div>
            <p>&lt;Button disableShadow /&gt;</p>
            <Button disableShadow={true}>Default</Button>
          </div>
        </div>
        <div>
          <div>
            <p>&lt;Button disableShadow /&gt;</p>
            <Button disabled={true}>Default</Button>
          </div>
          <div>
            <p>&lt;Button variant="text" disabled /&gt;</p>
            <Button variant='text' disabled={true}>
              Default
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
