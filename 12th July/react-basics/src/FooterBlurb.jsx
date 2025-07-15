import { generateText } from "./App"

function FooterBlurb() {
    return <div id="footerblurb">
				<div id="footerblurb-inner">
				
					<div className="column">
						<h2><span>Heading</span></h2>
						<p>{generateText(2)}</p>
					</div>	
					<div className="column">
						<h2><span>Heading</span></h2>
						<p>{generateText(2)}</p>
					</div>
					<div className="column">
						<h2><span>Heading</span></h2>
						<p>{generateText(2)}</p>
					</div>	
					
					<div className="clr"></div>
				</div>
			</div>
}

export {FooterBlurb}