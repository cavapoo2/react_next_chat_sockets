import Layout from '../components/MyLayout.js';
import Header2 from '../components/Header2.js';

export default () => (
	<div>
		<Layout>
			<Header2 />
		</Layout>
		<Layout>
            <h2>A simple chat client</h2>
			<style jsx>{`
	   body {
		  font-family: 'Georgia Pro', Georgia, Times, 'Times New Roman', serif;
	   }

		h1, h2 {
		font-family: Avenir Next, Avenir, SegoeUI, arial, sans-serif;
		margin-top:24px;/*non scalable fallback for old browsers*/
		margin-top:1.5em;
		line-height:1.5;
		font-weight:500;
		}
			  }
		article {
		max-width: 40em;
		margin: 0 auto;
		}
		h1 {
		font-weight:800;
		text-transform: uppercase;
		text-align: center;
		border-bottom: 1px solid #c8bc9d;
		}
		h2 {
		font-weight:600;
		font-size:1.75em;
		line-height: 1.25;
		margin-top: 1.036em;
		margin-bottom: 0.2859em;
		 }

		p {
		color:#3b4348;
		}

	`}</style>

	</Layout>
</div>
)