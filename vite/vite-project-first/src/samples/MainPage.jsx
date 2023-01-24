

export default function MainPage() {
    return (
        <>
            <div className='first-pager'>
                {/* <img src='./logo192.png' width="80" alt='logo' /> */}
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Power thousands of enterprise apps, including mobile apps</li>
                </ul>

                <br />
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>For Upskilling</li>
                    <li>Create a React Dashboard</li>
                    <li>It's a popular library, so I'll be
                        able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                        if I know React</li>
                </ol>

                <Section />

            </div>

        </>
    )
}

function Section() {
    return (
        <div>
            <section className="section-one">
                <h2>Section</h2>
                <p>Section</p>
            </section>

            <section className="section-two">
                <h2>Section 2</h2>
                <p>Section 2</p>
            </section>
        </div>
    )
}
