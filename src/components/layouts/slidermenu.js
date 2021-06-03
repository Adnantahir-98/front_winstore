import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, NavDropdown, Nav, Dropdown,DropdownButton, ButtonGroup} from 'react-bootstrap'


function slidermenu() {
    return (
        <div>
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Electronic Devices`}
                    
                    className="bg-default rounded-0 slider_dropbtn px-1"
                >
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Mobiles `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1" as="button"><Link to="/" className="text-dark underline">Nokia Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Apple Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">one Plus Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Oppo Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Xiomi Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Samsung Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Vivo Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Techno Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Realme Mobiles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Infinix Mobiles</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Laptops `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Gaming Laptops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Refurbished Laptops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Traditional Laptops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Office Working Laptops</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Desktops `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Server & PC's</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">LCD</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Gaming Consoles `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Playstation Games</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Ninetendo Games</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">XBOX Games</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Playstation Consoles</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Playstation Controllers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Gamming Controllers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Smart Watches `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Men's Watch</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Women's Watch</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Watches for Kids</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Cameras & Drones `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Video Cameras</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">DSLR</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Drones</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Instant Cameras</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Security Cameras</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Landline Phones</Link></Dropdown.Item>
                </DropdownButton>
                ))}
            </div>
            
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Electronic Accessories `}
                    className="bg-default rounded-0 px-1"
                >
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Mobiles Accessories `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Phone Cases</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Power Bank's</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Wireless Chargers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Tablet Accessories</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Car Chargers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Part & Tools</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Selfie Stick & Protectors</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Screen Protectors</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Cable & Chargers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Headphone's & Speakers `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Gaming Headphones</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">In-Ear Phone</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Wireless Buds</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Mono Headset</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Over-The-Head Headphones</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Wired Headphones</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Speakers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Voice Recorders</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Computer Accessories `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Keyboards</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Mice</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Mac Accessories</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Adapters & Cables</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Colling Pads</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Gaming Keyboards</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Selfie Stick & Protectors</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Screen Protectors</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Cable & Chargers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="10"><Link to="/" className="text-dark underline">Card Readers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Camera Accessories `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Lenses</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Batteries</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Memory Cards</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Tripods & Monopods</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Camera Cases, Covers & Bags</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Gaming Accessories `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Microphone's</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Gaming Chair</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Gaming Keyboard</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Wearables</Link></Dropdown.Item>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Storage Devices `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">External Hard Drives</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Internal Hard Drives</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Memory Cards</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">USB's</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Flash Drives</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">OTG Drives</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Printers & Scanners`}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Ink & Toners</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Printers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Scanners</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Fax Machines</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                </DropdownButton>
                ))}
            </div>
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` TV & Home Appliances `}
                    className="bg-default rounded-0 px-1"
                >
                    <Dropdown.Item eventKey="1">LED Televisions</Dropdown.Item>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Smart Television `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">4k Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">OLED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">ULED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Laser Televisions</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Large Appliances `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">4k Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">OLED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">ULED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Laser Televisions</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Television Accessories `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">TV Receivers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Wall Mounts & Protectors</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">TV Adapters</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">TV Remote Controllers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Antennas</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Kitchen Appliances `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Microwave</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Oven</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Cooker & Range</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Water Dispensers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Refrigerators</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Dish Washers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Irons & Steamers `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">4k Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">OLED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">ULED Televisions</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Laser Televisions</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Heating & Cooling `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Fan's</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Air Conditioners</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Heater</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Air Purifier</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Air Coolers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Vacuums & Floor Care  `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Vaccum Cleaners</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Floor Polisher</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Steam Mops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Electric Brooms</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>

                </DropdownButton>
                ))}
            </div>
            
        {/* Clothings/Suits Store */}
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Clothings Store `}
                    className="bg-default rounded-0 px-1"
                >
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Men's Store `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">T-Shirts & Tanks</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Shirts & Polo</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Pants, Shorts</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Traditional</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Rain Coat</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Kurtas & Shalwar Kameez</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Suits</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Winter Clothing</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Inner Wear</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="10"><Link to="/" className="text-dark underline">Shoes</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="11"><Link to="/" className="text-dark underline">Accessories</Link></Dropdown.Item>

                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Women's Store `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Unstitched Fabric</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Muslim Wear</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Kurtas & Shalwar Kameez</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Cosmetics</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Tops & Leggings</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Bras, Panties, Lingerie</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Winter Clothing</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Rain Coat</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Girls Clothing</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="10"><Link to="/" className="text-dark underline">Shoes</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="11"><Link to="/" className="text-dark underline">Jeans & Pants</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <Dropdown.Item eventKey="8">Baby Store</Dropdown.Item>
                </DropdownButton>
                ))}
            </div>
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Hicking Equipments `}
                    className="bg-default rounded-0 px-1"
                >
                    <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Camps & Tents</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Hicking Bags</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Survival Knifes</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Hiking Boots</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Survival Kit</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Pillow & Mats</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Sleeping Bags</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Torch & Water Bottles</Link></Dropdown.Item>
                </DropdownButton>
                ))}
            </div>
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Books & Stationary `}
                    className="bg-default rounded-0 px-1"
                >
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Books `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Literature Books</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Islamic Books</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Paper Products `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Note Books & Registers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Scissors & Papper Cutter</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Copier Paper</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Writting & Correction `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Color Pens & Pencil</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Color Marker & others</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Erasers & Removers</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Ball Point Pens </Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Geometry Sets</Link> </Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Paper Clips</Link> </Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Sharpener </Link></Dropdown.Item>
                            <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Pen & Ink </Link></Dropdown.Item>
                            <Dropdown.Item eventKey="9"><Link to="/" className="text-dark underline">Calculators</Link> </Dropdown.Item>
                            <Dropdown.Item eventKey="10"><Link to="/" className="text-dark underline">Scales </Link> </Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` School & Office Equipments `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Stamp & Punching Machines</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Tape, Glue & Silicone Gun</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Staplers & Pins </Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Boards & Flipcarts</Link> </Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Cash Memo </Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Sticky Notes</Link> </Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline"> School Bags</Link> </Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 p-1">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Art Supplies `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Art Easels</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                </DropdownButton>
                ))}
            </div>

            {/*  Grocery Store  */}
            <div className="rounded-0 p-1">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Grocery Store `}
                    className="bg-default rounded-0 px-1"
                >
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Beverages `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Tea & Coffee</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Juices</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Soft Drinks</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Cream & Whitener</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Milk & Milk Powder</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Yogurt</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Healthy Energy Drinks</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="8"></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Bakery `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Buiscuits & Cookies</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Niko & Snacks</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Fast Food</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Sweets</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Cakes</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Breads</Link></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Baking & Cooking `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Sugar & Salt</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Sawaiyan & Pasta</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Vinegar</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Msalas</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Jelly Pudding & Custard</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="8"></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Fresh Products `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Coconut Powder</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Nuts & Seeds</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Bread & Eggs</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Fresh Meat</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Vegetables</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Dry Fruits</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="8"></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Laundry & Household `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Garbage & Recycling Bins</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Surface Cleaner</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Bath cleaning</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Dish Washing</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Laundry</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Soap</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Surf/Detergent</Link></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <div className="rounded-0 p-1">
                    {['right'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` Grocery & Staples `}
                        className="bg-default rounded-0 px-1"
                    >
                        <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Canned & Frozen Food</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Grains, Beans, Pulses</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Macroni & Spaghetti</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Atta & other Flours</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Olive Oil</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">Ghee</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Rice</Link></Dropdown.Item>
                        <Dropdown.Item eventKey="8"><Link to="/" className="text-dark underline">Jarred Food</Link></Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Insect's Killer</Link></Dropdown.Item>
                </DropdownButton>
                ))}
            </div>
            <div className="rounded-0 px-1 pb-2">
                {['right'].map((direction) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="light"
                    title={` Pharmacy `}
                    className="bg-default rounded-0 px-1"
                >
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Ointments & Gells `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Ointments</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Gell</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Medicated Lotion</Link></Dropdown.Item>
                        </DropdownButton>
                        
                        
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Injections & Drips `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Injections</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Drips</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Insulation</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Intravenous IV Fluids</Link></Dropdown.Item>
                        </DropdownButton>
                        
                        
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Syrings & Drip sets `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Syringe</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Drip Sets</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Barnula</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Needles</Link></Dropdown.Item>
                        </DropdownButton>
                        
                        
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tablets & Drops`}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Tablets</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Ear Drops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Eye Drops</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Nose Drops</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Liquid & Pyodine `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Spirit Swab</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Iron & Supplements</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Paraffins</Link></Dropdown.Item>
                        </DropdownButton> 
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Face Mask & Gloves `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Face Mask</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Gloves</Link></Dropdown.Item>
                        </DropdownButton>                                    
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Cotton & Bandages `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Bandages</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Cotton</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Gauze Tape</Link></Dropdown.Item>

                        </DropdownButton>
                        
                        
                        ))}
                    </div>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Syrup & Suspensions `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Syrup</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Suspensions</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                    <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Gadgets</Link></Dropdown.Item>
                    <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Kits & Strips</Link></Dropdown.Item>
                    <div className="rounded-0 px-1 pb-2">
                        {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Medical Equipments `}
                            className="bg-default rounded-0 px-1"
                        >
                            <Dropdown.Item eventKey="1"><Link to="/" className="text-dark underline">Medical Accessories</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/" className="text-dark underline">Heating Pads</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="3"><Link to="/" className="text-dark underline">Stethoscope</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="4"><Link to="/" className="text-dark underline">Pulse Oximeter</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="5"><Link to="/" className="text-dark underline">Thermometer</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="6"><Link to="/" className="text-dark underline">BP Apparatus</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="7"><Link to="/" className="text-dark underline">Nebulizer & Inhalers</Link></Dropdown.Item>
                        </DropdownButton>
                        ))}
                    </div>
                </DropdownButton>
                ))}
            </div>

        </div>
    )
}

export default slidermenu
