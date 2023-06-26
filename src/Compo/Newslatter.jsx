


const Newslatter = () => {
    return (
        <div className="bgwhite bg-white p-10 md:grid grid-cols-2 w-[90%] mx-auto rounded-3xl">
            <div>
                <h2 className="text-2xl font-semibold text-red-500">Newsletter</h2>
                <h1 className="text-4xl font-semibold mt-5 text-red-500">Lets Work Together</h1>
                <h4 className="text-xl font-semibold mt-5">Are you impressed and want a Customs Project? Give a call and email me any time.</h4>
            </div>
            <div className="md:flex items-center justify-center">
                <input className="bg-slate-200 p-3 mr-4 rounded-3xl" type="email" name="" placeholder="Email" id="" />

                <button className="btn btn-warning btn-outline">Subscribe</button>
            </div>
        </div>
    );
};

export default Newslatter;