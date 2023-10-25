import photo from '../../../Images/photo.png'

const Addhomechangeone = () => {
    return (
        <div className=" flex flex-col border-2 border-red-400 px-7">
            <div className="flex flex-col  text-center">
                <h3>changes</h3>
                <p>para changes content</p>
            </div>
            <div className="flex justify-between">
                <div className="border-2 p-2 flex">
                    <div>
                        <h3>SITE SURVEY</h3>
                        <p>Comperehensive Engineering</p>
                        <p>Assesment</p>
                    </div>
                    <div className='w-16'>
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="second-div-card border-2 p-2 flex">
                    <div>
                        <h3>SITE SURVEY</h3>
                        <p>Comperehensive Engineering</p>
                        <p>Assesment</p>
                    </div>
                    <div className='w-16'>
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="third-div-card border-2 p-2 flex">
                    <div>
                        <h3>SITE SURVEY</h3>
                        <p>Comperehensive Engineering</p>
                        <p>Assesment</p>
                    </div>
                    <div className='w-16'>
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="home-change-content-div border-2 flex items-center justify-center">
                <div className=''>
                    <h3>SITE SURVEY</h3>
                    <p>Comperehensive Engineering</p>
                    <p>Assesment</p>
                </div>
                <div className='w-16'>
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Addhomechangeone