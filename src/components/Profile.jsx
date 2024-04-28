import React, { useContext } from "react"
import { UserContext } from "../Hooks/UserContext"

export default function Profile() {
	const { user } = useContext(UserContext)
	return <div>email: {user.email}</div>
}
