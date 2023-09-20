import '../../CSS/Blog.css'


const Blog = () => {

  const blogData = [
    {
      id: 1,
      imgurl: "https://scitechdaily.com/images/Solar-Panels-in-Grass.jpg",
      date: "9 Aug 2023",
      heading: "Harnessing Clean Energy",
      para1:
        " Solar panels are a sustainable and eco-friendly way to generate electricity by harnessing the power of the sun.They are composed of photovoltaic cells that convert sunlight into usable energy.",
      para2: " The process of converting sunlight into electricity involves the photovoltaic effect. When photons from the sun hit the surface of the solar panels, they release electrons, generating an electric current."
    },
    {
      id: 2,
      imgurl: "https://scitechdaily.com/images/Solar-Panels-in-Grass.jpg",
      date: "10 Aug 2023",
      heading: "Harnessing Clean Energy",
      para1:
        " Solar panels are a sustainable and eco-friendly way to generate electricity by harnessing the power of the sun.They are composed of photovoltaic cells that convert sunlight into usable energy.",
      para2: " The process of converting sunlight into electricity involves the photovoltaic effect. When photons from the sun hit the surface of the solar panels, they release electrons, generating an electric current."
    }, {
      id: 3,
      imgurl: "https://scitechdaily.com/images/Solar-Panels-in-Grass.jpg",
      date: "11 Aug 2023",
      heading: "Harnessing Clean Energy",
      para1:
        " Solar panels are a sustainable and eco-friendly way to generate electricity by harnessing the power of the sun.They are composed of photovoltaic cells that convert sunlight into usable energy.",
      para2: " The process of converting sunlight into electricity involves the photovoltaic effect. When photons from the sun hit the surface of the solar panels, they release electrons, generating an electric current."
    },
    {
      id: 4,
      imgurl: "https://scitechdaily.com/images/Solar-Panels-in-Grass.jpg",
      date: "13 Aug 2023",
      heading: "Harnessing Clean Energy",
      para1:
        " Solar panels are a sustainable and eco-friendly way to generate electricity by harnessing the power of the sun.They are composed of photovoltaic cells that convert sunlight into usable energy.",
      para2: " The process of converting sunlight into electricity involves the photovoltaic effect. When photons from the sun hit the surface of the solar panels, they release electrons, generating an electric current."
    }, {
      id: 5,
      imgurl: "https://scitechdaily.com/images/Solar-Panels-in-Grass.jpg",
      date: "15 Aug 2023",
      heading: "Harnessing Clean Energy",
      para1:
        " Solar panels are a sustainable and eco-friendly way to generate electricity by harnessing the power of the sun.They are composed of photovoltaic cells that convert sunlight into usable energy.",
      para2: " The process of converting sunlight into electricity involves the photovoltaic effect. When photons from the sun hit the surface of the solar panels, they release electrons, generating an electric current."
    },
  ];

  return (
    <div className="blog-parent-div">
      <div className="blog-heading-div">
        <h1>Our Blogs</h1>
      </div>
      <div className="blog-img-content-div">
        {
          blogData.map((res) => (
            <div className="blog-card" key={res.id}>
              <div className="blog-img-div">
                <img src={res.imgurl} alt="img-url" />
              </div>
              <div className="blog-content">
                <p style={{
                  color: "green",
                  fontWeight: "600"
                }}>{res.date}</p>
                <h3>{res.heading}</h3>
                <p>{res.para1}</p>
                <p>{res.para2}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className="form-blog-div">
        <form action="" className='blog-form2'>
          <label htmlFor="">
            Name
          </label>
          <input type="text" className='name-input-field' placeholder='Enter your name'/>
          <label htmlFor="">
            Email
          </label>
          <input type="text" className='email-input-field' placeholder='Enter your mail'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Leave your Requirement' className='text-area-input-field'></textarea>
          <div className="blog-form-submit">
            <button className="form-submit-btn">submit</button>
          </div>

        </form>
      </div>

    </div>
  )
};

export default Blog;
