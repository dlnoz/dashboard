import { NavLink } from "react-router-dom"
import { AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, OverviewIcon, SettingsIcon, SubscriptionIcon, TicketIcon } from "../assets/icons"
import { Logo } from "../assets/images"


const Navbar = () => {
  return (
    <div className="w-[25%] h-[100vh] bg-[#363740]">
        <div>
            <div className="flex items-center gap-[12px] mt-[41px] mb-[63px]">
                <img className="ml-[32px]" src={Logo} alt="Site logo img" width={32} height={32}/>
                <span className="text-[#A4A6B3]">Dashboard Kit</span>
            </div>
            <nav className="flex flex-col">
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/"}>
                    <OverviewIcon/>
                    <span className="text-[#A4A6B3]">Overview</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/tickets"}>
                    <TicketIcon/>
                    <span className="text-[#A4A6B3]">Tickets</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/ideas"}>
                    <IdeasIcon/>
                    <span className="text-[#A4A6B3]">Ideas</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/contacts"}>
                    <ContactsIcon/>
                    <span className="text-[#A4A6B3]">Contacts</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/agents"}>
                    <AgentsIcon/>
                    <span className="text-[#A4A6B3]">Agents</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/articles"}>
                    <ArticlesIcon/>
                    <span className="text-[#A4A6B3]">Articles</span>
                </NavLink>
                <span className="w-[383px] h-[0.1px] bg-[#DFE0EB] mt-[16px] mb-[16px] opacity-8"></span>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/settings"}>
                    <SettingsIcon/>
                    <span className="text-[#A4A6B3]">Settings</span>
                </NavLink>
                <NavLink className={"flex items-center relative gap-[24px] py-[18px] pl-[32px]"} to={"/subscription"}>
                    <SubscriptionIcon/>
                    <span className="text-[#A4A6B3]">Subscription</span>
                </NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
