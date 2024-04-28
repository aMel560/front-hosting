import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./index.css";
import { useLoginMutation } from "../../App/slices/ApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../App/slices/userSlice";
import { useSelector } from "react-redux";
const DialogDemo = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mutate, result] = useLoginMutation();
  const user = useSelector((state) => state.user);

  async function handleSubmit() {
    const response = await mutate({ email, password });
    console.log("response.data", response.data);
    dispatch(setUser(response.data));
  }
  console.log("user", user);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Login</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Login</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Input"
              id="username"
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
              <button onClick={() => handleSubmit()} className="Button green">
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

export default DialogDemo;
