import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams();
    return (
        <section className="text-center m-2 p-10 bg-green-200">
            User: {userId}
        </section>
    )
}

export default User