import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./index.css";
import { usePostUserMutation } from "../../App/slices/ApiSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [userMutation, result] = usePostUserMutation();
  async function handleclick() {
    const result = await userMutation({ email, password, role, name });
  }
  toast.success("Successfully toasted!");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Sign In </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Sign In </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="Input"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Role
            </label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
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
              <button onClick={() => handleclick()} className="Button green">
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

export default SignIn;
