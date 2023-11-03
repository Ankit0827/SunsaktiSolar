import photo from '../../../Images/photo.png';
import "../../../CSS/AddHomePageOne.css";

const WorldLeading = () => {
    return (
        <div className='parnet-div m-3'>
            <div className='upper-div flex flex-col items-center justify-center text-center  p-2 pt-4 text-white bg-slate-400 gap-4'>
                <h2>Worldwide Leading Solar Power Solution.</h2>
                <p>Investing in a Solar PV power Project with us ensures  hassle-free growth for the aforementioned investment over the next 25 years; in brief, we take care of the following. We handle everything for the client.</p>
            </div>
            <div className='flex items-center handle-small justify-center gap-36 p-5 border-2 bg-gray-200'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Reducing Design Evaluation</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <h3>System Design</h3>
                            <p>The framework Evaluation</p>
                            <p>Pattern of Arrays</p>
                            <p>Technical Requirement</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <h3>Permission & Approvals</h3>
                            <p>Client Survey</p>
                            <p>Construction clearance approvals</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                </div>
                <div className='img-mid-div flex flex-col gap-14 '>
                    <img src={photo} alt="" />
                <div className='flex flex-col  shadow-lg p-4 h-[15rem]'>
                <div className='flex item-center justify-center'>
                    <img src={photo} alt="/" className='w-10' />
                </div>
                <div className='text-center '>
                    <h3> Installation</h3>
                    <p>Limitation</p>
                    <p>Regular Evaluation</p>
                </div>
            </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                        <div>
                            <h3>Monitoring & Maintenance</h3>
                            <p>Use of Energy</p>
                            <p>Power from solar</p>
                        </div>

                    </div>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                        <div>
                            <h3>Utility Interconnection</h3>
                            <p>Authorization for Execution</p>
                        </div>

                    </div>
                    <div className='flex gap-2 shadow-lg p-4 h-[15rem]'>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>

                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default WorldLeading