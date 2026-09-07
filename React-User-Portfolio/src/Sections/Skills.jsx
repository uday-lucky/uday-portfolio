export const Skills = () => {

    const frontendskills = [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'NoSQL', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Redux', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
    ];
       const backendskills = [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'RESTful APIs', level: 'Intermediate' },
        { name: 'Authentication & Authorization', level: 'Intermediate' },
        { name: 'Server-side Rendering (SSR)', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Beginner' },
        { name: 'WebSockets', level: 'Beginner' },
        { name: 'Docker', level: 'Beginner' },
    ];
    return (

        <section id="Skills" className="flex flex-col items-center justify-center min-h-screen py-20">
            <div className="flex flex-col items-center justify-center min-h-screen py-20">
                <h1 className="text-3xl font-bold mb-4 text-blue-500">Skills</h1>
                <div className="grid grid-cols-1 w-200 md:grid-cols-2 gap-4 border border-gray-600 p-4 rounded">
                   <div className="flex flex-col ">
                   <h3 className="text-xl font-bold mb-2">Frontend</h3>
                   <div className="flex gap-2 flex-wrap">
                    {frontendskills.map((skill, index) => (
                        <span className='rounded-full border hover:text-red-500  hover:bg-gray-500 border-blue-600 p-2 text-xs  flex-wrap transition hover:scale-105'>{skill.name}-{skill.level}</span>
                    ))}
                    </div>
                    </div>
                    <div className="flex flex-col">
                     <h3 className="text-xl font-bold mb-2">Backend</h3>
                     <div className="flex gap-2 flex-wrap">
                    {backendskills.map((skill, index) => (
                        <span className='rounded-full border hover:text-red-500 hover:bg-gray-500 border-blue-600 p-2 text-xs  flex-wrap transition  hover:scale-105'>{skill.name}-{skill.level}</span>
                    ))}
                    </div>
                    </div>
                </div>
            </div>

        </section>
    )

}