import classNames from "classnames";

export default function SkillCard({name, level, image, imageClassName}) {
    const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
    return(
        <div className="flex items-center bg-white shadow-skill rounded-lg p-6">
            <img src={image} className={classNames("mr-6",addImageClassName)} alt="" />
            <div>
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p> 
             </div>
        </div>
    );
}