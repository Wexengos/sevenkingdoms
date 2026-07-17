import { useState } from "react";

import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";

import { Box, Switch } from "@mui/material";

import BaseMap from "../../assets/westeros_map.svg";

import Baratheon from "../../assets/baratheon.svg";
import Lannister from "../../assets/lannister.svg";
import Tyrell from "../../assets/tyrell.svg";
import Stark from "../../assets/stark.svg";
import Arryn from "../../assets/arryn.svg";
import Martell from "../../assets/martell.svg";
import Targaryen from "../../assets/targaryen.svg";
import Greyjoy from "../../assets/greyjoy.svg";
import Tully from "../../assets/tully.svg";

import { HouseOverlay, MainContainer } from "./styles";

export default function MapViewer() {
    const [showOverlays, setShowOverlays] = useState(true);
    return (
        <MainContainer>
            <Box>
                <Box
                    sx={{
                        height: "908px",
                        width: "600px",
                        border: "10px ridge sandybrown",
                        overflow: "hidden",
                        backgroundColor: "#c6ecff",
                        cursor: "crosshair"
                    }}
                >
                    <TransformWrapper
                        initialScale={2}
                        minScale={2}
                        maxScale={8}
                        centerOnInit
                    >
                        {({ state }) => (
                            <TransformComponent
                                wrapperStyle={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <img src={BaseMap} alt="Westeros Map" style={{
                                    cursor: "grab !important",
                                }} />

                                {showOverlays && (
                                    <>
                                        <HouseOverlay
                                            src={Baratheon}
                                            alt="House Baratheon"
                                            top="80%"
                                            left="80%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Lannister}
                                            alt="House Lannister"
                                            top="70%"
                                            left="25%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Tyrell}
                                            alt="House Tyrell"
                                            top="83%"
                                            left="35%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Stark}
                                            alt="House Stark"
                                            top="34%"
                                            left="52%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Arryn}
                                            alt="House Arryn"
                                            top="59%"
                                            left="72%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Martell}
                                            alt="House Martell"
                                            top="93%"
                                            left="85%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Targaryen}
                                            alt="House Targaryen"
                                            top="69%"
                                            left="87%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Greyjoy}
                                            alt="House Greyjoy"
                                            top="59%"
                                            left="27%"
                                            scale={state.scale}
                                        />
                                        <HouseOverlay
                                            src={Tully}
                                            alt="House Tully"
                                            top="64%"
                                            left="45%"
                                            scale={state.scale}
                                        />
                                        
                                    </>
                                )}
                            </TransformComponent>
                        )}
                    </TransformWrapper>
                </Box >
                <p><a href="https://awoiaf.westeros.org/index.php/File:Locator_map_Westeros_in_Known_world.svg">Base map SVG</a> created by Abjiklam.</p>
            </Box>
            <Box>
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Switch
                        defaultChecked
                        color="primary"
                        onChange={() => setShowOverlays(!showOverlays)}
                    />
                    <p>Show/Hide House Sigils</p>
                </span>
            </Box>
        </MainContainer>
    );
}