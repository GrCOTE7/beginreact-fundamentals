import React from 'react';
import { cloneElement, useState, createContext, use, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Dialog>
        <DialogTrigger>
          <button className="btn btn-error btn-lg">Open World</button>
        </DialogTrigger>
        <DialogContent>
          <h2 className="text-lg font-bold">Hello World!</h2>
          <DialogClose>
            <button className="absolute top-4 right-4 flex items-center justify-center size-12 bg-red-400 hover:bg-red-500 animate-in fade-in-50 animate-out fade-out-50 duration-700 rounded-md text-black">
              <X size={18} />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>Open FR</DialogTrigger>
        <DialogContent>
          <h2 className="text-lg font-bold">Salut !</h2>
          <input className="input input-bordered" type="text" />
          <DialogClose>Fermer</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const DialogContext = createContext(null);

const useDialog = () => {
  const context = use(DialogContext);

  if (!context)
    throw new Error('useDialog must be used within a DialogProvider');
  return context;
};

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(0);

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

const DialogContent = ({ children }) => {
  const context = useDialog();

  if (!context.open) return;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-50 backdrop-blur-sm animate-in fade-in-50 animate-out fade-out-50 duration-1000">
      <div className="card w-96 bg-base-200 shadow-xl animate-in fade-in-50 border-2 border-gray-700 hover:bg-orange-950 duration-700 hover:scale-105">
        <div className="card-body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

const DialogTrigger = ({ children }) => {
  const context = useDialog();

  if (children && typeof children !== 'string') {
    return cloneElement(children, {
      onClick: (e) => {
        context.setOpen(true);
      },
      style: {
        justifyContent: 'left',
        textAlign: 'left',
        paddingLeft: 350,
      },
    });
  }
  
  // children.props.onClick(e);
  return (
    <button 
    className="btn btn-primary"
    onClick={()=>{
      context.setOpen(true);
    }}>
      {children} (Bouton par défaut)
      </button>
  );
};

const DialogClose = ({ children }) => {
  const context = useDialog();

  if (children && typeof children !== 'string') {
    return cloneElement(children, {
      onClick: (e) => {
        context.setOpen(false);
        // children.props.onClick(e);
      },
    });
  }

  return (
    <button
      className="btn btn-primary btn-lg"
      onClick={() => {
        context.setOpen(false);
      }}
    >
      {children}
    </button>
  );
};
