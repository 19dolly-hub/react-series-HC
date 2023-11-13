// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const gitData = useLoaderData();
    // const [gitData, setGitData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/19dolly-hub")
    //     .then(res => res.json())
    //     .then(data => setGitData(data))
    // }, []);
    return (
        <>
            <section className="text-center">
                <h1 className="font-medium text-lg p-2">GitHub Info</h1>
                <div className="flex items-center">
                    <img src={gitData.avatar_url} alt="GitHub" width={300}/>
                    <div>
                        <p>Name: {gitData.name}</p>
                        <p>User-Name: {gitData.login}</p>
                        <p>Followers: {gitData.followers}</p>
                    </div>
                </div>
                {/* {console.log(gitData)} */}
            </section>
        </>
    );
}

export default Github


export const callGithub = async () => {
    const res = await fetch("https://api.github.com/users/19dolly-hub");
    return res.json();
}
