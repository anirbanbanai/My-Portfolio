

const Service = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl text-red-500 font-semibold text-center"> What service I offer you</h1>
            <h3 className="text-3xl font-bold text-center">Services</h3>
            <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <h2 className="text-xl font-semibold">Web Development</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                </div>
                <div className="bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <h2 className="text-xl font-semibold">Front-End Development</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                </div>
                
                <div className="bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <h2 className="text-xl font-semibold">Full-Stack Development</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                </div>
                
                <div className="bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <h2 className="text-xl font-semibold">API intigration</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                </div>
                
                <div className="bg-slate-200 p-5 rounded-2xl hover:bg-white">
                    <h2 className="text-xl font-semibold">Landing Page Design</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste, quae corporis sint culpa suscipit asperiores dolorum nobis! Voluptate, veritatis?</p>
                </div>
                
            </div>
        </div>
    );
};

export default Service;