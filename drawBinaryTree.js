import {BinaryTreeNode} from './BinaryTreeNode.js' ;
import {getRequiredHeightAndWidth, DEFAULT_CONFIG,drawNode,connectEdges,treeConstructor} from './treeUtils.js';


const canvas = document.querySelector('canvas');


function drawBinaryTree(root,canvasElement){
   const maxWidth = window.innerWidth;
   const maxheight = window.innerHeight;

   // initialize the canvas dimensions
   canvasElement.width = maxWidth ;
   canvasElement.height = maxheight ;


  // calculating the required width and height to draw tree str.
   const {
      requiredCanvasWidth,
      requiredCanvasHeight
   } =  getRequiredHeightAndWidth(root);

   const windowWidthCenter = maxWidth / 2;
   const requiredWidthCenter = requiredCanvasWidth / 2;

  const xStart =  windowWidthCenter - requiredWidthCenter;
  const  xEnd = windowWidthCenter + requiredWidthCenter;

  const horizontalConfig = {xStart,xEnd} ;

  recursivelyDrawNodes(root,canvasElement,0.5,horizontalConfig);
}

//Draw -
//Steps to follow
// 1 : find root nodes coordinates 
// 2 : Draw rootNode circle
// 3 : Recursively Draw left & right nodes
// 4 : Connect edges of root with left and right child nodes


function recursivelyDrawNodes(root,canvasElement,currentLine,horizontalConfig) {
  const {xStart,xEnd} = horizontalConfig;

  const xPos = (xStart +xEnd) / 2 ;
  const yPos = currentLine * DEFAULT_CONFIG.nodeHeightSpacing;

  drawNode(root.value,canvasElement,xPos,yPos);

  if(root.left !== null){
    const leftNodeHorizontalConfig = {xStart , xEnd : xPos};
    recursivelyDrawNodes(root.left,canvasElement,currentLine + 1,leftNodeHorizontalConfig);

    // connect Edges
    connectEdges(canvasElement , 
     {
       xStart : xPos,
       xEnd : (xStart + xPos) / 2
      },
      {
         yStart : yPos + DEFAULT_CONFIG.radius,
         yEnd : ((currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing ) - DEFAULT_CONFIG.radius 
      }
   );
  }

  if(root.right !== null){
     const righttNodeHorizontalConfig = {xStart: xPos , xEnd};
    recursivelyDrawNodes(root.right,canvasElement,currentLine + 1,righttNodeHorizontalConfig);

    // connect edges
    connectEdges(canvasElement,
      {
       xStart : xPos,
       xEnd : (xPos + xEnd) / 2
      },
      {
       yStart : yPos + DEFAULT_CONFIG.radius,
       yEnd : ((currentLine + 1) * DEFAULT_CONFIG.nodeHeightSpacing ) - DEFAULT_CONFIG.radius
      }

    )
  }


}

let prevValue = ''
function init(value){
  prevValue = value;

  clearCanvas();

 const root =  treeConstructor(value);

 drawBinaryTree(root,canvas);
}

function clearCanvas() {
 const context = canvas.getContext('2d');
 context.clearRect(0,0,canvas.width,canvas.height);
}

const textarea = document.querySelector('textarea')
const Applybtn = document.querySelector('.Applybtn');
const Clearbtn = document.querySelector('.Clearbtn');

Applybtn.addEventListener('click', () => {
  if(textarea.value === '') return;

  init(textarea.value);
})

Clearbtn.addEventListener('click', () => {
  textarea.value = '';
  clearCanvas()

});

window.addEventListener('resize', () => init(prevValue));