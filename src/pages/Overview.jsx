import OverviewBoxes from "../components"



const Overview = () => {
  return (
    <div className="pages-wrapper containers">
      <div className="flex gap-[30px]">
        <OverviewBoxes title={"Unresolved"}/>
        <OverviewBoxes title={"Overdue"}/>
        <OverviewBoxes title={"Open"}/>
        <OverviewBoxes title={"On hold"}/>
      </div>
      <div className="w-[1095px] h-[530px] bg-white rounded-[8px] mt-[30px] flex justify-between px-[30px]">
          <div className="mt-[30px]">
            <h1 className="font-bold text-[19px] text-[#252733]">Today’s trends</h1>
            <p className="font-normal text-[12px] text-[#9FA2B4]">as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="mt-[30px] flex gap-[32px]">
            <span>Today</span>
            <span>Yesterday</span>
          </div>
      </div>
    </div>
  )
}

export default Overview