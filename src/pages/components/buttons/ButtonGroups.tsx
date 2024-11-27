import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAlignLeft, 
  faAlignCenter, 
  faAlignRight, 
  faBold, 
  faItalic, 
  faUnderline,
  faFilter,
  faSort,
  faSortUp,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';

const ButtonGroups: React.FC = () => {
  const [activeTextFormat, setActiveTextFormat] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const toggleTextFormat = (format: string) => {
    setActiveTextFormat(prev => 
      prev.includes(format) 
        ? prev.filter(f => f !== format) 
        : [...prev, format]
    );
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Button Groups</h2>
          
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Text Alignment</h5>
            </div>
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Text Alignment">
                <button 
                  type="button" 
                  className={`btn btn-outline-primary ${activeTextFormat.includes('left') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('left')}
                >
                  <FontAwesomeIcon icon={faAlignLeft} />
                </button>
                <button 
                  type="button" 
                  className={`btn btn-outline-primary ${activeTextFormat.includes('center') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('center')}
                >
                  <FontAwesomeIcon icon={faAlignCenter} />
                </button>
                <button 
                  type="button" 
                  className={`btn btn-outline-primary ${activeTextFormat.includes('right') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('right')}
                >
                  <FontAwesomeIcon icon={faAlignRight} />
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Text Formatting</h5>
            </div>
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Text Formatting">
                <button 
                  type="button" 
                  className={`btn btn-outline-secondary ${activeTextFormat.includes('bold') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('bold')}
                >
                  <FontAwesomeIcon icon={faBold} />
                </button>
                <button 
                  type="button" 
                  className={`btn btn-outline-secondary ${activeTextFormat.includes('italic') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('italic')}
                >
                  <FontAwesomeIcon icon={faItalic} />
                </button>
                <button 
                  type="button" 
                  className={`btn btn-outline-secondary ${activeTextFormat.includes('underline') ? 'active' : ''}`}
                  onClick={() => toggleTextFormat('underline')}
                >
                  <FontAwesomeIcon icon={faUnderline} />
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Filter and Sort</h5>
            </div>
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Filter and Sort">
                <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  Filter
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={toggleSortDirection}
                >
                  <FontAwesomeIcon 
                    icon={sortDirection === 'asc' ? faSortUp : faSortDown} 
                    className="me-2" 
                  />
                  {sortDirection === 'asc' ? 'Sort Ascending' : 'Sort Descending'}
                </button>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Vertical Button Group</h5>
            </div>
            <div className="card-body">
              <div className="btn-group-vertical" role="group" aria-label="Vertical Button Group">
                <button type="button" className="btn btn-outline-primary">Option 1</button>
                <button type="button" className="btn btn-outline-primary">Option 2</button>
                <button type="button" className="btn btn-outline-primary">Option 3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroups;
