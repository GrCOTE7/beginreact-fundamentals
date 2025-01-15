import React from 'react';
import { useState, createContext, use, useEffect } from 'react';

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Dialog>
        <DialogTrigger />
        <DialogContent>
          <p>Hello Guy !</p>
        </DialogContent>
        <DialogForceOpen />
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
  const [fOpen, setFOpen] = useState(true); // ForceOpen du Modal

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        fOpen,
        setFOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

const DialogContent = ({ children }) => {
  const context = useDialog();

  if (!context.open) return;

  return (
    <dialog id="modalContent" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{children}</h3>
        <p className="py-4">
          Press ESC key or click buttons or outside to close
        </p>
        <form method="dialog" className="modal-action">
          <button className="btn align-end">Close</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

const DialogTrigger = () => {
  const context = useDialog();

  return (
    <>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          const modal = document.getElementById('modalContent');
          if (modal instanceof HTMLDialogElement) {
            modal.showModal();
          }
          context.setOpen(true);
          // context.fOpen = false;
        }}
        id="modalBtn"
      >
        Open
      </button>
    </>
  );
};

const DialogForceOpen = () => {
  const context = useDialog();

  setTimeout(() => {
    if (context.fOpen) {
      const modalBtn = document.getElementById('modalBtn');
      modalBtn.click();
    }
    setTimeout(() => {
      context.setFOpen(false);
    }, 100);
  }, 200);
  return;
};
