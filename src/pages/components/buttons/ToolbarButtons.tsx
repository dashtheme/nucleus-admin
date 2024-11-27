import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCut, 
  faCopy, 
  faPaste, 
  faUndo, 
  faRedo, 
  faSave, 
  faPrint,
  faSearch,
  faLink,
  faFont,
  faBold,
  faItalic,
  faUnderline
} from '@fortawesome/free-solid-svg-icons';

const ToolbarButtons: React.FC = () => {
  const [activeTools, setActiveTools] = useState<string[]>([]);

  const toggleTool = (tool: string) => {
    setActiveTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool) 
        : [...prev, tool]
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Button Toolbar</h2>
          
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Text Editing Toolbar</h5>
            </div>
            <div className="card-body">
              <div className="btn-toolbar" role="toolbar" aria-label="Text Editing Toolbar">
                <div className="btn-group me-2" role="group" aria-label="First group">
                  <button 
                    type="button" 
                    className={`btn btn-outline-primary ${activeTools.includes('cut') ? 'active' : ''}`}
                    onClick={() => toggleTool('cut')}
                  >
                    <FontAwesomeIcon icon={faCut} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-primary ${activeTools.includes('copy') ? 'active' : ''}`}
                    onClick={() => toggleTool('copy')}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-primary ${activeTools.includes('paste') ? 'active' : ''}`}
                    onClick={() => toggleTool('paste')}
                  >
                    <FontAwesomeIcon icon={faPaste} />
                  </button>
                </div>

                <div className="btn-group me-2" role="group" aria-label="Second group">
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('undo') ? 'active' : ''}`}
                    onClick={() => toggleTool('undo')}
                  >
                    <FontAwesomeIcon icon={faUndo} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('redo') ? 'active' : ''}`}
                    onClick={() => toggleTool('redo')}
                  >
                    <FontAwesomeIcon icon={faRedo} />
                  </button>
                </div>

                <div className="btn-group" role="group" aria-label="Third group">
                  <button 
                    type="button" 
                    className={`btn btn-outline-success ${activeTools.includes('save') ? 'active' : ''}`}
                    onClick={() => toggleTool('save')}
                  >
                    <FontAwesomeIcon icon={faSave} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-success ${activeTools.includes('print') ? 'active' : ''}`}
                    onClick={() => toggleTool('print')}
                  >
                    <FontAwesomeIcon icon={faPrint} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title">Text Formatting Toolbar</h5>
            </div>
            <div className="card-body">
              <div className="btn-toolbar" role="toolbar" aria-label="Text Formatting Toolbar">
                <div className="btn-group me-2" role="group" aria-label="Search and Link">
                  <button 
                    type="button" 
                    className={`btn btn-outline-primary ${activeTools.includes('search') ? 'active' : ''}`}
                    onClick={() => toggleTool('search')}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-primary ${activeTools.includes('link') ? 'active' : ''}`}
                    onClick={() => toggleTool('link')}
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </button>
                </div>

                <div className="btn-group" role="group" aria-label="Text Style">
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('font') ? 'active' : ''}`}
                    onClick={() => toggleTool('font')}
                  >
                    <FontAwesomeIcon icon={faFont} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('bold') ? 'active' : ''}`}
                    onClick={() => toggleTool('bold')}
                  >
                    <FontAwesomeIcon icon={faBold} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('italic') ? 'active' : ''}`}
                    onClick={() => toggleTool('italic')}
                  >
                    <FontAwesomeIcon icon={faItalic} />
                  </button>
                  <button 
                    type="button" 
                    className={`btn btn-outline-secondary ${activeTools.includes('underline') ? 'active' : ''}`}
                    onClick={() => toggleTool('underline')}
                  >
                    <FontAwesomeIcon icon={faUnderline} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolbarButtons;
