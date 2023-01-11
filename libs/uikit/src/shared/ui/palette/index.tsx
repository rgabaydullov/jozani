import { black, blue, green, grey, red, white, yellow } from 'libs/uikit/src/lib';
import Typography from '../typography';
import { mapColors } from './helpers';
import { PaletteSubstrate } from './shared/ui';

const Palette = () => (
  <PaletteSubstrate>
    <Typography variant="h5">
      Use <code>getCssVar</code> with name and grade to obtain the color
    </Typography>

    <Typography variant="body1">
      Example:
      <code>
        getCssVar('blue', 500);
        getCssVar('black', 50);
      </code>
    </Typography>

    <div>{Object.entries(blue).map(mapColors('blue'))}</div>

    <div>{Object.entries(green).map(mapColors('green'))}</div>

    <div>{Object.entries(red).map(mapColors('red'))}</div>

    <div>{Object.entries(yellow).map(mapColors('yellow'))}</div>

    <div>{Object.entries(grey).map(mapColors('grey'))}</div>

    <div>{Object.entries(white).map(mapColors('white'))}</div>

    <div>{Object.entries(black).map(mapColors('black'))}</div>
  </PaletteSubstrate>
);

export default Palette;
