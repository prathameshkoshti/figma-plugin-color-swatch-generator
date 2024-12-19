import useColorPicker from '@store/colorPicker';
import { Accordion } from '@components/ui/accordion';
import Swatch from './components/Swatch';

function Swatches() {
  const { swatches, swatchEditingId, deleteSwatch, loadSwatch } =
    useColorPicker();

  return (
    <div className="flex-1 py-4 mx-4 overflow-auto">
      <Accordion type="single" collapsible className="w-full">
        {swatches.map((swatch) => (
          <Swatch
            key={swatch.id}
            swatch={swatch}
            deleteSwatch={deleteSwatch}
            loadSwatch={loadSwatch}
            isEditing={swatchEditingId === swatch.id}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default Swatches;
