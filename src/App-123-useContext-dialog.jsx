import React from 'react';
import { useState, createContext, use, createPortal, useEffect } from 'react';

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Dialog>
        <DialogTrigger />
        <DialogContent>
          <h2 className="text-lg font-bold">Hello Guy !</h2>
          <DialogClose />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger />
        <DialogContent>
          <h2 className="text-lg font-bold">Salut !</h2>
          <input className="input input-bordered" type="text" />
          <DialogClose />
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
  const [open, setOpen] = useState(1);

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

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-50 backdrop-blur-sm animate-in fade-in-50 animate-out fade-out-50 duration-1000">
        <div className="card w-96 bg-base-200 shadow-xl animate-in fade-in-50 border-2 border-gray-700 hover:bg-indigo-500 duration-1000 hover:scale-110">
          <div className="card-body">{children}</div>
        </div>
      </div>
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
        }}
      >
        Open
      </button>
    </>
  );
};
const DialogClose = () => {
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
          context.setOpen(false);
        }}
      >
        Close
      </button>
    </>
  );
};
