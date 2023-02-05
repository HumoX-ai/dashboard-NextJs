import { getTeams } from "@/api";
import MiniDrawer from "@/app/components/AppBar";
import Cards from "@/app/components/Cards";
import React, { useEffect, useState } from "react";

export default function teams() {
 

  return (
    <MiniDrawer>
      
      <Cards />
    </MiniDrawer>
  );
}
