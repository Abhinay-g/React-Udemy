import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();
  function handleSave() {
    const enteredtitle = title.current.value;
    const entereddescription = description.current.value;
    const entereddueDate = dueDate.current.value;
    if (
      enteredtitle.trim() === "" ||
      entereddescription.trim() === "" ||
      entereddueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredtitle,
      description: entereddescription,
      dueDate: entereddueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">Looks like you fucked up</p>
        <p className="text-stone-600 mb-4">
          make sure provide value to each fields
        </p>
        {/* <form method="dialog">
          <button>Close</button>
        </form> */}
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 text-stone-50 px-6 py-2 hover:text-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title"></Input>
          <Input ref={description} label="Description" textArea></Input>
          <Input type="date" ref={dueDate} label="Due date"></Input>
        </div>
      </div>
    </>
  );
}
