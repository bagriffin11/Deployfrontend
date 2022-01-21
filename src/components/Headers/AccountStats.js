import React from "react";

// components

import CardAccounts from "components/Cards/CardAccounts.js";

export default function AccountStats() {

  return (
    <>
      {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full" style={{ marginTop: `150px` }}>
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div >
                    <CardAccounts
                  statSubtitle="media"
                  statTitle="Add Account"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron="Add any of your socials or email."
                  statIconName="fa-instagram"
                  statIconColor="bg-red-500"
                />  
                
                  </div>
                
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
