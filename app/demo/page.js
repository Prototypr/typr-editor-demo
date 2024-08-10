"use client";
import React, { useState } from "react";

import "tiptypr/dist/styles.css";
import Tiptypr from "tiptypr";

import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ThemeSelector from "../../components/ThemeSelector";
import RequireLoginCheckbox from "../../components/RequireLoginCheckbox";
import EnablePublishingFlowCheckbox from "../../components/EnablePublishingFLowCheckbox";
import NavSettings from "../../components/NavSettings";
import DemoCodeDialog from "../../components/DemoCodeDialog";
import GeneralSettingsPanel from "../../components/GeneralSettingsPanel";
import SeoPanel from "../../components/SeoPanel";
import UserPopover from "../../components/UserPopover";

import * as Accordion from "@radix-ui/react-accordion";

import { defaultProps } from "tiptypr";
import { customDeepMerge } from "@/libs/customDeepMerge";

const avatarOptions = [
  { name: "Avatartion", imgSrc: "https://prototypr-media.sfo2.digitaloceanspaces.com/strapi/32a56359cbe6a680ac1eb8eb659c46eb.png" },
  { name: "Pravatar", imgSrc: "https://i.pravatar.cc/300" },
  { name: "Pixel (xsgames)", imgSrc: "https://xsgames.co/randomusers/avatar.php?g=pixel" },
  { name: "UI Avatars", imgSrc: "https://ui-avatars.com/api/?background=random" },
  { name: "RoboHash", imgSrc: "https://robohash.org/random" },
  { name: "Female (xsgames)", imgSrc: "https://xsgames.co/randomusers/avatar.php?g=female" },
  { name: "Male (xsgames)", imgSrc: "https://xsgames.co/randomusers/avatar.php?g=male" },
];

const filterModifiedProps = (defaultProps, currentProps) => {
  const modifiedProps = {};
  for (const key in currentProps) {
    if (
      typeof currentProps[key] === "object" &&
      !Array.isArray(currentProps[key])
    ) {
      const nestedModifiedProps = filterModifiedProps(
        defaultProps[key] || {},
        currentProps[key]
      );
      if (Object.keys(nestedModifiedProps).length > 0) {
        modifiedProps[key] = nestedModifiedProps;
      }
    } else if (currentProps[key] !== defaultProps[key]) {
      modifiedProps[key] = currentProps[key];
    }
  }
  return modifiedProps;
};

const serializeComponents = components => {
  const replacer = (key, value) => {
    if (React.isValidElement(value)) {
      return `<${value.type.name || value.type.displayName || "Component"} />`;
    }
    if (typeof value === "function") {
      return true; // Replace functions with true
    }
    return value;
  };
  return JSON.stringify(components, replacer, 2);
};

export default function DemoPage() {
  const [editorProps, setEditorProps] = useState(() => {
    return customDeepMerge(defaultProps, {
      requireLogin: true,
      enablePublishingFlow: true,
      theme: "gray",
      user: {
        id: 1,
        isLoggedIn: true,
        isAdmin: true,
      },
      components: {
        nav: {
          show: true,
          position: "sticky",
          userBadge: {
            avatarPlaceholder:avatarOptions[0].imgSrc,
          },
        },
      },
    });
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSeoMenuChange = newSeoMenu => {
    setEditorProps(prevProps => ({
      ...prevProps,
      components: {
        ...prevProps.components,
        settingsPanel: {
          ...prevProps.components.settingsPanel,
          seoTab: {
            ...prevProps.components.settingsPanel.seoTab,
            menu: newSeoMenu,
          },
        },
      },
    }));
  };
  const handleGeneralMenuChange = newGeneralMenu => {
    setEditorProps(prevProps => ({
      ...prevProps,
      components: {
        ...prevProps.components,
        settingsPanel: {
          ...prevProps.components.settingsPanel,
          generalTab: {
            ...prevProps.components.settingsPanel.generalTab,
            menu: newGeneralMenu,
          },
        },
      },
    }));
  };

  const themeOptions = [
    { value: "gray", label: "Gray" },
    { value: "blue", label: "Blue" },
  ];

  const handleThemeChange = value => {
    setEditorProps({ ...editorProps, theme: value });
  };

  const handleRequireLoginChange = checked => {
    setEditorProps({ ...editorProps, requireLogin: checked });
  };

  const handleEnablePublishingFlowChange = checked => {
    setEditorProps({ ...editorProps, enablePublishingFlow: checked });
  };

  const handleCustomPostStatusesChange = checked => {
    setEditorProps({ ...editorProps, customPostStatuses: checked });
  };

  const handleNavChange = nav => {
    setEditorProps({
      ...editorProps,
      components: {
        ...editorProps.components,
        nav,
      },
    });
  };

  const handleSettingsChange = (field, value) => {
    // Update the settings based on the field and value
    console.log(`${field} changed to:`, value);
  };

  const handleUserChange = (field, value) => {
    setEditorProps(prevProps => ({
      ...prevProps,
      user: {
        ...prevProps.user,
        [field]: value,
      },
    }));
  };

  const modifiedProps = filterModifiedProps(defaultProps, editorProps);

  const demoCode = `
  import Tiptypr from 'tiptypr';
  import "tiptypr/dist/styles.css";

    <Tiptypr
      requireLogin={${editorProps.requireLogin}}
      components={${serializeComponents(modifiedProps.components)}}
      theme="${editorProps.theme}"
      user={${JSON.stringify(editorProps.user, null, 2)}}
      enablePublishingFlow={${editorProps.enablePublishingFlow}}
      customPostStatuses={${editorProps.customPostStatuses}}
    />
  `;

  return (
    <div className="flex max-h-screen bg-gray-100 overflow-hidden">
      <button
        className="absolute bottom-0 left-0 m-2 rounded-full z-[51] h-[44px] w-[44px] text-gray-500 bg-white flex items-center justify-center shadow-md border border-gray-300 lg:!hidden"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        {isPanelOpen ? (
          <Cross2Icon className="h-3 w-3" />
        ) : (
          <HamburgerMenuIcon className="h-3 w-3" />
        )}
      </button>
      <div
        className={`min-h-screen lg:!w-1/4 bg-white shadow-md ${
          isPanelOpen
            ? "block w-full md:w-3/4 h-full z-50 absolute top-0 left-0"
            : "hidden"
        } lg:block relative`}
      >
        <h3 className="text-xl font-semibold border-b border-gray-300 px-3 pt-4 py-3">
          Customize Editor
        </h3>

        <Accordion.Root
          type="single"
          collapsible
          className="overflow-y-auto pb-[150px] h-full"
          id="accordion-root"
          onValueChange={tabName => {
            if (tabName == "general-settings" || tabName == "seo-panel") {
              const settingsMenuBtn =
                document.getElementById("settings-menu-btn");
              if (
                settingsMenuBtn &&
                !settingsMenuBtn.classList.contains("is-open")
              ) {
                settingsMenuBtn.click();
                setTimeout(() => {
                  const generalTab = document.getElementById("general-tab");
                  if (generalTab) {
                    generalTab.click();
                  }
                }, 1000); // 100ms delay to ensure the settings panel is open
              }
            }
          }}
        >
          <Accordion.Item
            value="nav-settings"
            className="border-b border-gray-300"
          >
            <Accordion.Header className="data-[state=open]:bg-gray-100 data-[state=open]:border-b border-gray-300 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              <div className="w-full h-full">
                <Accordion.Trigger className="text-md font-medium w-full p-4 h-full text-left">
                  Nav Settings
                </Accordion.Trigger>
              </div>
            </Accordion.Header>
            <Accordion.Content className="p-4">
              <NavSettings
                nav={editorProps.components.nav}
                onNavChange={handleNavChange}
                avatarOptions={avatarOptions}
              />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            value="theme-selector"
            className="border-b border-gray-300"
          >
            <Accordion.Header className="data-[state=open]:bg-gray-100 data-[state=open]:border-b border-gray-300 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              <div className="w-full h-full">
                <Accordion.Trigger className="text-md font-medium w-full p-4 h-full text-left">
                  Editor Settings
                </Accordion.Trigger>
              </div>
            </Accordion.Header>
            <Accordion.Content className="p-4">
              <div className="flex flex-col gap-4">
                <ThemeSelector
                  theme={editorProps.theme}
                  onThemeChange={handleThemeChange}
                  themeOptions={themeOptions}
                />
                <RequireLoginCheckbox
                  requireLogin={editorProps.requireLogin}
                  onRequireLoginChange={handleRequireLoginChange}
                />
                <EnablePublishingFlowCheckbox
                  enablePublishingFlow={editorProps.enablePublishingFlow}
                  onEnablePublishingFlowChange={
                    handleEnablePublishingFlowChange
                  }
                />
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="seo-panel"
            className="border-b border-gray-300"
          >
            <Accordion.Header className="data-[state=open]:bg-gray-100 data-[state=open]:border-b border-gray-300 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              {/* <div className="w-full h-full"> */}
                <Accordion.Trigger className="text-md font-medium w-full p-4 h-full text-left">
                  SEO Panel
                </Accordion.Trigger>
              {/* </div> */}
            </Accordion.Header>
            <Accordion.Content className="p-4">
              <SeoPanel
                seoMenu={editorProps.components.settingsPanel.seoTab.menu}
                onValueChange={handleSeoMenuChange}
              />
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="general-settings"
            className="border-b border-gray-300"
          >
            <Accordion.Header className="data-[state=open]:bg-gray-100 data-[state=open]:border-b border-gray-300 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              <div className="w-full h-full">
                <Accordion.Trigger className="text-md font-medium w-full p-4 h-full text-left">
                  General Panel
                </Accordion.Trigger>
              </div>
            </Accordion.Header>
            <Accordion.Content className="p-4">
              <GeneralSettingsPanel
                generalMenu={
                  editorProps.components.settingsPanel.generalTab?.menu
                }
                onValueChange={handleGeneralMenuChange}
              />
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300 shadow-md">
          <button
            onClick={() => setIsDialogOpen(true)}
            className={`w-full py-2 px-4 ${
              editorProps?.theme == "blue"
                ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500"
            } text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
          >
            Show Demo Code
          </button>
        </div>
      </div>
      <div className="w-full md:w-3/4 md:p-6 flex flex-col relative min-h-screen">
        <div className="bg-white md:rounded-lg md:shadow-lg flex-1 w-full overflow-y-auto max-w-[900px] mx-auto md:p-3 md:pr-1 md:pt-0">
          <Tiptypr
            requireLogin={editorProps.requireLogin}
            components={editorProps.components}
            theme={editorProps.theme}
            user={editorProps.user}
            enablePublishingFlow={editorProps.enablePublishingFlow}
            customPostStatuses={editorProps.customPostStatuses}
          />
        </div>
      </div>
      <DemoCodeDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        demoCode={demoCode}
        theme={editorProps.theme}
      />
      <UserPopover
        editorProps={editorProps}
        handleUserChange={handleUserChange}
      />
    </div>
  );
}