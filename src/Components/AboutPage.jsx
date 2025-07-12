export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1721076216277-22de7111cd06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           Building with React is 10% coding and 90% wondering why something worked yesterday and not today. Still, there's nothing more satisfying than a perfectly rendered component… until the next render breaks it again.
                        </p>
                        <p className="mt-4 text-gray-600">
                            React development is a rollercoaster of creativity, chaos, and Google searches. We build reusable components not because it's cool, but because we've already written the same button five times in one day.
                        </p>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}