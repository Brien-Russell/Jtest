import React from "react";
import { widgets } from './AllWidgets';
import WidgetList from "./WidgetList";

const WidgetsSection = () => {
    return (
     <div id="Widgets" class="py-20">
      <div class="bg-opacity-100 text-center  overflow-auto">
          <h1 class="text-7xl text-white">WIDGETS</h1>
      <WidgetList widgets={widgets} />
      <footer><a href="#About">
          <img alt="down" src="/images/downarrow.png" class="mt-10 mx-auto w-10 h-10" />
          </a>
      </footer>
      </div>
    </div>

    );
}

export default WidgetsSection;