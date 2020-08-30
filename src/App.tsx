import React, { useState, useRef, useEffect } from 'react';
import { select, Selection } from 'd3-selection';
import './App.css';

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      selection
        .append('rect')
        .attr('height', 200)
        .attr('width', 300)
        .attr('fill', 'red');
    }
  }, [selection]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data visualization wit d3.js, yo!</h1>
        <svg ref={svgRef}>
          <rect />
          <rect />
          <rect />
        </svg>
      </header>
    </div>
  );
};

export default App;
