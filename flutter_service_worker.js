'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "d9281c26137570230621da6acdf7e1d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "9096d497e61a30f6f5d0c8d622b8d358",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8be104717cde424b263ccfea1ebc7549",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf1b4d74bd0bd339e1d8184d6fe5dc27",
".git/logs/refs/heads/main": "d2ed3ae6293ad2d1c769074f2bbbf970",
".git/logs/refs/heads/main_update": "8407f94ac6fb9a38be074b561fc3dd6c",
".git/logs/refs/remotes/origin/main": "e99f52ce51cdc9589276be3c07329161",
".git/logs/refs/remotes/origin/main_update": "3be2a9d7e4e44506299f9c173eb2c127",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/0c/98006f3d9f761f59edf61cf4ce22f0e9071d3b": "ce5693975d17c3136151631bd79d9123",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/12/44abdc1ce33b5e1ac5c550823ddcfaaf5f6be6": "558f521a79a7bbbe272a42ee5a7def2a",
".git/objects/15/b636d75f3601a7c73ea7531259f36eb4776cfc": "2e78312caf96b7808f28b4514f987cd4",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/18/19167f15aac4f171db49e7b0498eb4d0121b56": "0b502fcdf42cd511d27e94fee5e747aa",
".git/objects/19/45ce5fde8e638a257ece98c8cad610f4fc6dfb": "c10be6ba7ff2d9552174fb6073c2aa95",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/27/739c8857d27a1b949c00688c10238df4e84b19": "f10d20faf5917b069e21640dec2de673",
".git/objects/28/ef3d3d219739b57d718e8ef57e2ac6b8e53a5d": "bf01fb948cb3d845472559865e0446da",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2e/2c93fca8e085d0997a63234c05ea7a949eda9d": "aadb8f67144c2ffa1026eecba6bbe296",
".git/objects/2f/3a292c26a72005097f1057db81da702ba0168b": "051a93dea25e38ad15697c7798ad15dd",
".git/objects/2f/67f3656b49609e8093ffe9f207d9fb7510d51d": "bb4809e691cacf73a5f68995d41371ca",
".git/objects/2f/9f6743131cf0aad6fb8bcc05736e88a2e488a9": "dd8f61db9776c653b1547a6b3af31788",
".git/objects/30/909a783130539d828cc916b04d955a8efbd786": "032e4266f482064678e0c5a70448bb2e",
".git/objects/31/28400ec274cd48fc63eadcdc66b94b2b2926f5": "1bc58ac210e30b656fc49f57acc701b7",
".git/objects/32/cf2ec90a7edd7007b3a8f78bab015df95e86be": "438ca4496deac78fdfb3dba75ae66e01",
".git/objects/32/f127e8af9bb180311df16ea95b9d39d0f9812d": "014e1710689c2a4863ab7cf4332c63f3",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/3b4800ea008d145eec041fb5ced0f88c7dec38": "1d9c359c995748bd4abdaccc0d874e10",
".git/objects/35/0d4abbed853453d349c4f22d528474a1e146ce": "0ca8d41aa77535978d9e994afad4e822",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/39/3fbacb4845979268d8b770a14c95156367b8f9": "69a463108ee439bc7f94240c958d782e",
".git/objects/3b/482091f22fab3ba00dc741998f05e6794f78f8": "96106bec9afefe5492893ec711f10db3",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/40/0a33596f678330c725d80897edf91d5a2b1b82": "e9adf81cb72ab473aa332c709c2bf261",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/13e3722e7ed01e0b3195fe4b2db22d545bfb5d": "68bfeb926c00b6f90f5d5edefdb9c748",
".git/objects/45/a59f5c30a4885b21c084f022a5d555b7c3ea99": "1cac60c0fe9705e7d234b266ea119292",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/0868b9560f3408c101d547e55abd3924a48498": "2a59561ba981bceaf2b7eb601440dd8d",
".git/objects/4d/f50c0d9d41ace35436a4889e4eaffacefe78ae": "f1b6de95a5b4771081c00ca4a9d8c349",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/53/bbb534a323f0561a12cbd2933a920b2b155c0a": "d3820e955c1ff69a1d7e03ffc06afbfd",
".git/objects/55/dbefb2aef30b8f9603f029a4123d6fb2a1d57d": "74f7e701eb6430017f5a7499a8caa8fb",
".git/objects/56/ccf5c5e0682acbbe2752f24d6b27c9cf403b7c": "0d6706fffbc8a414d7cb1b7260b581ed",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/269e80e4405f5da5ee3fe89c3ef2c6d772708b": "fac397ce2f4cdf61d9f308a84bf7e4e9",
".git/objects/5c/990d4f5721adf1303d34cd3823927a909a5acf": "32601abf13450a7292bfd117c0ef2450",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/c30c72cbf02c53e7a124dbfccc049683a3c134": "e11a10f1c2c7239891113e852208d5fb",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/69/8824f9adba01b1596613f47eac746a3d88f980": "2a03b54ac8d7c07a1c26d15569f964d2",
".git/objects/6b/be2aee64c252407a3bc46a64d246e394dd6487": "eb81396daf5b740e84ac7eacf2cf246e",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/e8adc5cfcebf50d9b62962fe336aeb988c31f5": "96d1f2f1c029539a0be626392381fdc5",
".git/objects/71/a2fb82029645b4d531b83af03205d50af4ee03": "96156bdf72a48d65052fb622aef3d34d",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/78/30eb3c39064309b5fcbaa6fdc52bbf9d7d54b6": "d88db0f26c5c33672e8fc879495e1216",
".git/objects/7a/a1e2873095b0f8434b817e635f782b05902a31": "d12c1485d5636dea4953840c794ca106",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/26bab606eed6d8801bf4bb09b4e9eafbdb405c": "6d1e84f3496d722bbdbb033ee533385d",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/1318cf896f1535237ddfc718dc6c8a6ed856d7": "9e01802ce10319be92e180f7f68f295f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/629d51a8d7fce89552096695a90c95fae438b7": "4a8dd9f720c220d8a52e45a9312ddf7c",
".git/objects/93/b01c6105f7b8ffd3ee51e36e219930d66e93af": "938f02e2228eab78a2c3cd2b355cb56b",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/9b/22e30e0a8a0e479db9d185c50138ba89ba4a73": "d086ab763f96b310c3920f65e3b5fce5",
".git/objects/9b/826a78965d082c9818dd927b58657099cd9a20": "e5f3df80bb27e07d118d5e8f1a4f8e1a",
".git/objects/9e/9ba092c2b4a74a563dadd3a5479273da349ffc": "800a9c8521d10ce96781542ed993d09f",
".git/objects/9e/c40b2a7dcf528a44492c862b88dfe73532b6cf": "cdb386e4e4b7d1836bd9ea475ecfd326",
".git/objects/a1/edb406084f827f86a00917f6571cec337b7d02": "8ea1bbca95f4f4c0992968b3d15331fa",
".git/objects/a2/561e8606015125def947049514b010bfa13b42": "d03e6c4d62a0c4461cf91503c5738001",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/aa/e110a7eeb80927635f9defaba71aa0988ed2b3": "7dfb5913081473c1b4e29867b68744b1",
".git/objects/ab/8f63449ebbaf2b79065dbb80b8b590a1246a7a": "34aae94df798047931a4d6e1792e9bb3",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b3/2a828c9ac2db2f793bd92b544f3d1e95bf49c1": "f9db4efaaf96822b74172320be90dd0c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/da61aaa6ba4b475d6d41c7685ec18f3810c5bb": "a17fde81420b8014c9bf8e073f637733",
".git/objects/b9/e55349ee50d0b2bedf75716576477de43791db": "0b39988065184adba1ecadd9559bca05",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/bd/7f45ab53a1345af277bb12dd6d44e68f8a4980": "6dfe9bd5f3571835607323db2b0c3888",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c0/accadc295bee39c5a32eb8bb5e965c7d037c7a": "1f2dca1d8b7a0bd2d918f99e0345b150",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c8/9b79321efd50ee2925fcac500fd85695eef0bd": "03775870972a14cda47a68d076f3f0ea",
".git/objects/cd/71e992ccea42b2a18e1eeafbf9e4b629b2b37c": "784f7728e10b0a6c6ffb924fcc46ea5a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/2a9b7019a904c8e39ecf8b079b4df3c4344e64": "7d1a5f331597910c8de51888442138fe",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/00dffb6bbd8f72e1e13c365fc9bcd54a94446a": "13a08a80d1704ea4dcedb299061921ef",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/de/928fe277e1e8943de053e4c2c5097e3f4c65b3": "c5a22dc181e4ca039cff1a1bb35811a2",
".git/objects/de/c6b52cb59e7561d311f4b1a7c740c8c62a65ef": "fb51eee9cabc04ba57fd4b98f7ca6135",
".git/objects/e4/1957c5a02f78bc475db960c4938e6dd000d755": "8d57a6be10433af2f0c66f70091ec352",
".git/objects/e4/e331a7e8b312ed3860eb40bc9300c2a64cf3b8": "368a4e43f1eec8a2d6c442683a74c702",
".git/objects/e7/6168a35177ee7004bf43645376e80a88c181d6": "150fdd55f58c5bace02892eccc3ba474",
".git/objects/eb/224d112ba4876a40f71429e46d46a2afc838fb": "4eaedb27f8daa4056d4934d0895c2a9d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0a360a3bad3f2f4b7bcb6f571d0f8b09611db9": "b723c9abe87d420f073fd56601fc54d2",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/847aa32e569c5cae41744647c75c36b258f4f9": "b1abea23cd18612ccb7f97fe9036a761",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/77ed2c7b17bf51491ba460253d25253bae8974": "0011caa8337db1485541cde516a006d5",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f7/20fc9999a7e52d33e1bfac405fe6ab30f02639": "5c9120ce64eca68c3bbfc26072c7e2b6",
".git/objects/f8/3b3ae409323e69a2a9c0e11e4d3aa16ac82da6": "c95034976b0520a0027684855eed969e",
".git/objects/fa/0b15a76d90ea803eeb92c1cf5de377d60a7285": "8c14448adaa7194223bc0ea90728aaf1",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fd/6f7d712236a84d2c20a97412360504e947c1b1": "d577314a1bfe271c2e925be8abf0efb0",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/refs/heads/main": "1e0d7b275aa9db868025917b52c9d396",
".git/refs/heads/main_update": "b1aa8b4d48e24a8bd4595a0c10a19b40",
".git/refs/remotes/origin/main": "1e0d7b275aa9db868025917b52c9d396",
".git/refs/remotes/origin/main_update": "b1aa8b4d48e24a8bd4595a0c10a19b40",
".idea/appInsightsSettings.xml": "ea384778ac2fc25d4a6f61a4365fe6be",
".idea/caches/deviceStreaming.xml": "fd200aa801dd736ea1e58c90e0b191fe",
".idea/material_theme_project_new.xml": "6d6132e3bc6e862204028d4a2bb570df",
".idea/misc.xml": "14bde3ca26eb968ed7a58de03197ed92",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "6aceeae04d97f3cdfd835b31d85459ff",
"assets/AssetManifest.bin": "41582fd44497d73095369cff9aeaf5e1",
"assets/AssetManifest.bin.json": "ebe3e8cec030892beb3efdac52da6b3c",
"assets/AssetManifest.json": "53b728fe4103d6a32f21f7411a318e1e",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/alamal.png": "680f652e5db5e1651e82038ac2c86a6a",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/cafely.png": "c7fda2163f63c44df43c0659d4578fb0",
"assets/assets/images/cally.png": "238e4d2af99a01ef44e82cff2370ec9a",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/cardly.png": "848796f00a4dda09b7cd7ea88030df57",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/helpdown.png": "0a0d1d2c4bc825c05c9c37c3f0536a8f",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/lawyer.png": "1f7771f537b09b5534f0ecbb969001ef",
"assets/assets/images/me.png": "fbdb5c5fbcb60a620aa3d2d19b65bb0b",
"assets/assets/images/me2.jpg": "84d5a662588e9ad2e5b9a4ef2dea87c6",
"assets/assets/images/me3.jpg": "a4e2285c0f29e7b44dc78c90a551deb3",
"assets/assets/images/muzicly.png": "aa0c1b49048a81bf815e27e306f0bd55",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/uber.png": "a910c46c4ac0f10e2d0c9a30176cfe43",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "10e5d19f04951341085eb895f60cce1d",
"assets/NOTICES": "87700a6affcbd9bc4b57cba29adfe65e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b6047c3c4fa5c9a1aa833d2915c29fa7",
"icons/android-icon-144x144.png": "42a7071f0d211351299529874c623808",
"icons/android-icon-192x192.png": "e953b89d7bf79a222bfed6481f1d0c0c",
"icons/android-icon-36x36.png": "1e9e9507d1cd973809f95f772b1b2c7e",
"icons/android-icon-48x48.png": "5176708c6948ac9ef3ddfc25e0477f5e",
"icons/android-icon-72x72.png": "868986c38f3e2d5dda299b3ecb90ec62",
"icons/android-icon-96x96.png": "3dc2000d00bf08302e8daa8868b7aab6",
"icons/apple-icon-114x114.png": "910b21bff95cbd9f69db5b9e711ab365",
"icons/apple-icon-120x120.png": "607a7419dff5bc10fa6f51ce98cb3ee9",
"icons/apple-icon-144x144.png": "42a7071f0d211351299529874c623808",
"icons/apple-icon-152x152.png": "47470cd6f628cd0ee35560e8e8ee69e4",
"icons/apple-icon-180x180.png": "0f6d0ec8f4a6eab18f545fc1a16f098c",
"icons/apple-icon-57x57.png": "5411663f54f053c8634c6f3f74c4db1c",
"icons/apple-icon-60x60.png": "c56155fb423e47dbaeda64bba73ead4c",
"icons/apple-icon-72x72.png": "868986c38f3e2d5dda299b3ecb90ec62",
"icons/apple-icon-76x76.png": "cea4a3e610f852d5b230e74c9a402e5f",
"icons/apple-icon-precomposed.png": "0ec78748be741119ef6be783930ab1f2",
"icons/apple-icon.png": "0ec78748be741119ef6be783930ab1f2",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "339945624e24efb0e47f0b3d52878c2e",
"icons/favicon-32x32.png": "fa40d04ca9cdfc809e0e807e2ceef220",
"icons/favicon-96x96.png": "3dc2000d00bf08302e8daa8868b7aab6",
"icons/favicon.ico": "e1a012b37e766d8531e41b81f86ace01",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "42a7071f0d211351299529874c623808",
"icons/ms-icon-150x150.png": "1f1c569d31b8869ed52d12618ef830cf",
"icons/ms-icon-310x310.png": "c864a453d61922c9402463da393cd56a",
"icons/ms-icon-70x70.png": "ee7d139e9ea18c98572c7c89a178ccbd",
"index.html": "86013d741b69b229294b5ee770e68f16",
"/": "86013d741b69b229294b5ee770e68f16",
"main.dart.js": "8b42b967c7d8b223e1d5d797ea5ff73b",
"manifest.json": "623d08e2a010c8098382acf36e5dee2a",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
