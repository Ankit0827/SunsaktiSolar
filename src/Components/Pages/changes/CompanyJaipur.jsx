import img1 from '../../../Images/img1.png'
import comapany from '../../../Images/companyimg.png'
import '../../../CSS/companyjaipur.css'
import { offercard } from '../../../utills/mockData'
import { OurinstalledSites } from '../../../utills/mockData'
import commercialimg from '../../../Images/comercialsolarpannelimg.png'

const Companyjaipur = () => {
    return (
     
        <div className="company-jaipur-parent-div">
            <div className="compnay-jaipur-heading flex items-center  h-52 justify-center bg-[#234579] text-white">
                <h3>Solar Company in Jaipur</h3>
            </div>
            <div className="first-div">
                <div className="Top-solar-company flex items-center justify-center p-5 text-white m-5 mt-0">
                    <div className="top-solar-content-div  flex-1">
                        <h2>
                            Top Solar Comapany in jaipur
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <button className='bg-[#234579] p-2 rounded-sm shadow-lg'>Consult now</button>
                    </div>
                    <div className="top-solar-img-div flex flex-1">
                        <img src={comapany} alt="" />
                    </div>
                </div>
                <div className="solar-epc">
                    <div className="Top-solar-company flex items-center justify-center p-5 text-white m-5 mt-0">
                        <div className="top-solar-content-div  flex-1">
                            <h2>
                                Solar Epc Company In Jaipur
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <button className='border-2 border-[#234579]  rounded-3xl px-4 p-2 font-bold shadow-lg'>Read more</button>
                        </div>
                        <div className="top-solar-img-div flex flex-1">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="installation m-5">
                    <div className="installetion-div">
                        <h3>Installing Solar Pannel on Rooftop in jaipur</h3>
                    </div>
                    <div className="install-description">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
            </div>
            <div className="second-div m-5">
                <div className="offer-heading text-center">
                    <h3 className='font-bold'>What we offer</h3>
                    <p>We are the top Solar System Installer in jaipur and we list down below the Component Comprising Solar System.</p>
                </div>
                <div className='flex flex-wrap gap-2 px-24 items-center justify-center'>
                    {
                        offercard.map((res) => (
                            <div className=' flex  w-[48%]  p-4 rounded-lg gap-3 shadow-lg bg-gray-300' key={res.id}>
                                <div className="imgicon-div">
                                    <img src={res.imgPath} alt="/" className='w-[8rem]'/>
                                </div>
                                <div className="description-div">
                                    <h4 className='text-gray-600 text-lg font-bold'>{res.heading}</h4>
                                    <p className='text-gray-500'>{res.cardDescription}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className=' mt-5 p-1'>
                    <div className="commercial-heading-div">
                        <h2 className='text-center p-4'>Jaipur Commercial Solar Solution</h2>
                    </div>
                    <div className='flex shadow-lg bg-slate-300 p-4 rounded'>
                        <div className='descrition-div flex flex-1'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                        <div className='comercial-imgdiv flex flex-1'>
                            <img src={commercialimg} alt="/" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-div">
                <div className='upper-divof-third-div'>
                    <div className='choosing-description-div flex flex-col items-center justify-center'>
                        <h3>Why choose us as Jaipur top Solar Company</h3>
                        <p className='text-center px-5'>We take to pride in being a leading solar company in jaipur,offering expert installation services and unmatched customer satisfaction. Trust us for dependable solar pannel fror hoe jaipur and join us in harnessing solar power for greener future.</p>
                    </div>
                    <div className='card-offer-divof-third-div flex flex-wrap items-center justify-center gap-2'>
                        {
                            offercard.map((res) => (
                                <div className=' flex  w-[45%]  p-4 rounded-lg gap-3 shadow-lg bg-gray-300' key={res.id}>
                                    <div className="imgicon-div">
                                        <img src={res.imgPath} alt="/" className='w-[7rem]' width="100%" height="100%" />
                                    </div>
                                    <div className="description-div">
                                        <h5 className='text-gray-600'>{res.heading}</h5>
                                        <p className='text-gray-500'>{res.cardDescription}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='lower-divof-third-div border-2 bg-gray-200 m-16 p-5'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='our-installed-div-heading '>
                            <h3>Our Installed Sites</h3>
                        </div>
                        <div className='flex flex-wrap gap-4 items-center justify-center'>
                             {OurinstalledSites.map((res)=>(
                                <div className='border-2 border-white rounded flex items-center justify-center flex-col w-[40%]' key={res.id}>
                                     <img src={res.ourSitesImgPath} alt="/" className='w-[100%] h-[15rem] p-2'/>
                                     <p className='font-bold'>{res.SitesDescription}</p>
                                     <p>{res.kwatt}</p>
                                </div>
                             ))

                             }
                        </div>
                    </div>
                  
                </div>
                <div className='feedback-div flex flex-col items-center justify-center  m-5 p-3' >
                            <h4 className='font-bold'>What jaipur family says about us</h4>
                            <p className='text-center p-3'>I am extremely pleased with my experience  working with Sun Sakti Solar green Energy.Their Solar Pannel Solution and organized process have made me aware of renewable energy. I would recommend them to my friends who are  intrested in using natural electricity.  </p>
                    </div>
            </div>
        </div>
    )
}
export default Companyjaipur
