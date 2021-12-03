import React from 'react';

function MenuItems({ menuItem }) {
    console.log({ menuItem });
    return (
        <div className="projects">
            {
                menuItem.map((item) => {
                    return (
                        <div className="project" key={item.id}>
                            <div className="imageData">
                                <img src={item.image} alt="" />
                            </div>
                            {item.download != null ? 
                                <h5>
                                    <a href={item.download} target="_blank" download>{item.title}</a>
                                </h5>
                                :
                                <h5>
                                    <a href={item.link} target="_blank">{item.title}</a>
                                </h5>
                            }
                            <p>
                                {item.description}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItems;