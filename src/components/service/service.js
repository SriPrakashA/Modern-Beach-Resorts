import './../service/service.css'


function Service() {

    const services = [
        {
              icon: <i className="fa-solid fa-martini-glass-citrus"></i>,
            title: "free cocktails",
            id:1,
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        },
        {
              icon: <i className="fa-solid fa-person-hiking"></i>,
            title: "endless hiking",
            id:2,
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        },
        {
              icon: <i className="fa-solid fa-van-shuttle"></i>,
            title: "free shuttle",
            id:3,
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        },
        {
              icon: <i className="fa-solid fa-beer-mug-empty"></i>,
            title: "storages beer",
            id:4,
            info:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        },
    ]

    return (
        <div className="service">
            <div className="service-head">
                <h2>Services</h2>
                <div className="empty-service"></div>
            </div>
            <div className="service-all-list">
                {services.map((service) => {
                    return (
                        <div className="service-list" key={service.id}>
                            <div>{service.icon}</div>
                            <h2>{service.title}</h2>
                            <p>{service.info}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { Service }

