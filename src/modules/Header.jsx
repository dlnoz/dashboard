import { useLocation } from "react-router-dom"
import { NotificatoinIcon, SearchIcon } from "../assets/icons"
import { ProfilPhoto } from "../assets/images"


const Header = () => {
    const {pathname} = useLocation()
    return (
        <div className="header-wrapper flex justify-between containers !mt-[41px]">
            <div className="capitalize">
                {pathname == "/" ? "Overview" : pathname.split("/")[1]}
            </div>
            <div className="flex gap-[32px]">
                <div className="flex gap-[24px] items-center">
                    <SearchIcon/>
                    <NotificatoinIcon/>
                </div>
                <span className="w-[2px] h-[42px] bg-[#DFE0EB]"></span>
                <div className="flex items-center gap-[16px]">
                    <span>Jones Ferdinand</span>
                    <div className="w-[44px] h-[44px] border-[#C5C7CD] border-[3px] p-[2px] rounded-full">
                        <img src={ProfilPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header