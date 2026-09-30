import { useMemo, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { alpha, chartColors } from '../../config/chartTheme';

const plugins = [zoomPlugin];

/**
 * A react-chartjs-2 `<Chart>` with x-axis zooming (chartjs-plugin-zoom):
 * drag across the plot to zoom into a range, Ctrl + wheel or pinch to zoom,
 * Shift + drag to pan, and zoom in / zoom out / reset buttons above the chart.
 *
 * Props: `type`, `data`, `options` as for `<Chart>`, and `height` (px).
 */
export default function ZoomableChart({ type, data, options, height = 350 }) {
  const chartRef = useRef(null);

  const zoomOptions = useMemo(() => {
    const c = chartColors();
    return {
      ...options,
      plugins: {
        ...(options && options.plugins),
        zoom: {
          limits: { x: { min: 'original', max: 'original', minRange: 2 } },
          pan: { enabled: true, mode: 'x', modifierKey: 'shift' },
          zoom: {
            mode: 'x',
            wheel: { enabled: true, modifierKey: 'ctrl' },
            pinch: { enabled: true },
            drag: {
              enabled: true,
              backgroundColor: alpha(c.primary, 0.12),
              borderColor: alpha(c.primary, 0.6),
              borderWidth: 1,
            },
          },
        },
      },
    };
  }, [options]);

  const zoomIn = () => chartRef.current?.zoom(1.25);
  const zoomOut = () => chartRef.current?.zoom(0.8);
  const resetZoom = () => chartRef.current?.resetZoom();

  return (
    <div>
      <div className="d-flex justify-content-end mb-1">
        <div className="btn-group btn-group-sm" role="group" aria-label="Chart zoom">
          <button
            type="button"
            className="btn btn-light"
            title="Zoom in"
            aria-label="Zoom in"
            onClick={zoomIn}
          >
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </button>
          <button
            type="button"
            className="btn btn-light"
            title="Zoom out"
            aria-label="Zoom out"
            onClick={zoomOut}
          >
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
          </button>
          <button
            type="button"
            className="btn btn-light"
            title="Reset zoom"
            aria-label="Reset zoom"
            onClick={resetZoom}
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
        </div>
      </div>
      <div style={{ position: 'relative', height }}>
        <Chart ref={chartRef} type={type} data={data} options={zoomOptions} plugins={plugins} />
      </div>
    </div>
  );
}
