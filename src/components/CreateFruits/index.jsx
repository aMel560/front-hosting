import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./index.css";
import { useState } from "react";

const CreateFruits = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  function handleClick(title) {
    deleteProduct(title);
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Create Fruit</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Create Fruit</Dialog.Title>
          {/* <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description> */}
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="Input"
              id="Title"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Image
            </label>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              className="Input"
              id="Img"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Count
            </label>
            <input
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="Input"
              id="Count"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="Input"
              id="Price"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button onClick className="Button green">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateFruits;
