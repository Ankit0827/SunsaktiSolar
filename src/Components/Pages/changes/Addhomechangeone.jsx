import photo from '../../../Images/photo.png';
import "../../../CSS/AddHomePageOne.css";

const Addhomechangeone = () => {
    return (
        <div className='parnet-div'>
            <div className='upper-div text-center w-full'>
                <h2>Changes</h2>
                <p>work in progress...</p>
            </div>
            <div className='flex items-center handle-small justify-center gap-36 p-5'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 shadow-lg p-4'>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                    <div className='flex gap-2 shadow-lg p-4'>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                    <div className='flex gap-2 shadow-lg p-4'>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                    </div>
                </div>
                <div className='img-mid-div flex flex-col gap-2'>
                    <img src={photo} alt="" />
                    <div className='flex flex-col item-center justify-center shadow-lg p-4 m-8'>
                <div className='flex item-center justify-center'>
                    <img src={photo} alt="/" className='w-10' />
                </div>
                <div className='text-center '>
                    <h3>Site Survey</h3>
                    <p>Some content</p>
                </div>
            </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 shadow-lg p-4'>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>

                    </div>
                    <div className='flex gap-2 shadow-lg p-4'>
                        <div>
                            <img src={photo} alt="/" className='w-10' />
                        </div>
                        <div>
                            <h3>Site Survey</h3>
                            <p>Some content</p>
                        </div>

                    </div>
                    <div className='flex gap-2 shadow-lg p-4'>
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

export default Addhomechangeone