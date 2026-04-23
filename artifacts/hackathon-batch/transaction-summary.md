# Transaction Proof Summary

- Batch: `proof patch`
- Total actions: `50`
- Avg price: `$0.002`
- Total paid: `$0.100`
- Runs: `10`

## Client Escrow Funding

Each successful run locked `5 USDC` from the client wallet into ERC-8183 escrow before PI delivery and final review settlement.

| wallet | address | runs_used | before_usdc | after_usdc | observed_change |
|---|---|---:|---:|---:|---:|
| client_buyer_1 | `0xa02da1ae59772429fac015c992c121b9e0ec6636` | 5 | 46.586790 | 21.586790 | -25.000000 |
| client_buyer_2 | `0x9ed4d5eca33e573ef2b6781b1e697b811fc7bab1` | 5 | 89.818172 | 64.818172 | -25.000000 |

## Seller Post-Batch Settlement Evidence

Micropayments during the pipeline were recorded with `verify=isValid` and `settle=success`. The values below reflect the current available balances shown in the latest transaction summary view after the 10-run proof batch.

| wallet | address | immediate_after_usdc | later_available_usdc | observed_change |
|---|---|---:|---:|---:|
| literature_seller | `0xaaabd17892c3ade30b0e23bebdbbe56c1e9cbd3d` | 2.024000 | 2.066000 | +0.042000 |
| drugdb_seller | `0x4eccaab32b30d04251c9a3e30f56a00e743064fc` | 2.026000 | 2.068000 | +0.042000 |
| pathway_seller | `0xe93dc2600fe4db4648c5c367b3819899fded1836` | 2.070000 | 2.112000 | +0.042000 |
| review_seller | `0xe610525fd20c5cbbc9b1ee7fcb5d68b866846e6a` | 0.002000 | 0.044000 | +0.042000 |
| critics_seller | `0x92b8551899c4df02b8cca466c99dc33c37d957e8` | 0.002000 | 0.044000 | +0.042000 |

## Run Summary

| run | job_id | final_status | payment_count | create | setBudget | approve | fund | submit | complete |
|---|---|---|---:|---|---|---|---|---|---|
| proof-batch-01 | 4424 | Completed | 5 | `0xc3cac69c167c937bdadc9c4100cf151b29b29c748e77d6caf6a70dc6e90c2998` | `0xd98ff95fbc9a8e88ccefaa9020483feb64aaf3acc1251c5525ee0a7756c053e6` | `0x1efae683f8569f28c02ebdc5c2c89b40830ee191e3047d2c959b1b733a63328c` | `0xa7dc4ed763f82f879c738344ba72098b2f8cb6e6521ce12d764762e85c19ffc5` | `0x9073812f9cec25b166c203f286c1782e52396702d8d3f23b267f380504b60365` | `0x110f3c34370f5bcfe1040c8e4051e9a323a4fc853cfb85e8325a673ea1400ec5` |
| proof-batch-02 | 4425 | Completed | 5 | `0xd9f84c54aeec80076a7556d79e5d49e5dafc11f7a6c17bdcdb650f63940190e6` | `0x3e17959a5ca264b38aadd1f33c91e47c264582de7e7ddf778b253dfdf576fd6b` | `0x0617f35137fc85ef7db4423a867a8679bdc64f6b1e50ee5b1bbfafadaf225167` | `0x95b11bf9bd55c03a80f4b60e2cd495f3c9f3d8b9a124b516d964d6ddf0c84fb9` | `0xae7ef3022e7ac210993451abf29cd4845c8e0b1e4f8d29cf294b99d1ffef26f7` | `0x0dd3e8cb8141e7df03d815dfb363cdce92b2ed6c88592e5efadb598bcd9f9210` |
| proof-batch-03 | 4426 | Completed | 5 | `0xa013b5c3bd90352f01cd65eb752ae161e9d650256127ae81d85ff429bbd41f71` | `0x848ab8cd1b7549ceae827c10f8853135e73e3e7ccd81909e6b10cd19d01d9bcf` | `0xe3aafe7c1dad2d9f015af9264b385a4e0e93e6d419106e629dbb3da1fbc490ac` | `0x3ff1ba6838edf26c404dc21f51e87bfad2883b3bcbb80adbf7cbfbac13ab2591` | `0x95ee6e3846e670d359b5f272416da031a41ef6037bc35d17814f96c323bbc48e` | `0xf8b95654730549f7924a4d4b31a2689c726c30b5dac6f16d0e3bb26aed077561` |
| proof-batch-04 | 4427 | Completed | 5 | `0xa7b057df957d10d8694b9f918dcf8d0130ada7816066b5b81ac10da722abcade` | `0x65a6724fc39c8dcff4b878917a422ef6fb0286ad26ecd96f5b9beb9e0bf4ff69` | `0x717cac71f03cfa48f6924d0ae733f402f6f1bf209595ea96891bfe7e3a8a3e12` | `0xd114414a3bce073050bd4737420a9fee9d189231d5cb94e927f16b08e56ad902` | `0xcca9908c470da89e3a68ebbfe59c89fa2c31b986d03bb71c9acdf6d34a3900f9` | `0x0f16e5e7d24760a11a73b7e72a62c24540347c04b661847c7fbadb78766ea016` |
| proof-batch-05 | 4428 | Completed | 5 | `0xe5f4d73b74bc395c62ac56d847ceb2c39bb27b04350b2f2b618448e15aca34bc` | `0x37fb83a0b3c57e3efa8913917085d98b5d2ec61e71f7ec178db44e1812cebc5b` | `0x4785c5376e4e4ae7d9b1411ecc202604121b76fa45079de6c75262f73c156ec5` | `0xa35a9b78ecd32cecd8d392fdf7e41100418bae0f072e36890d7ab204dba3a6ad` | `0xd0021179ff7ba820ac7297435f84dcb9ed6f655c384674f344f5e06e684ace48` | `0xbf8255e471078e00a4b76d7477c102205dac185ccc2d3f9832c908d992c0bf94` |
| proof-batch-06 | 4429 | Completed | 5 | `0x76bfcd77ced0ea68965f3d09aae0ec2852a0bd099e80b01793ce309efc0a90b1` | `0x333cd068cb281a1c403c722fc9bb354d8467ea007a79eb6251029006b0f72bcd` | `0xd1c0a74f08a9d3dd66d1485f3532962cb1e1f90e5d867e80472f72a1361b87c4` | `0x2fe93fda9a560401199d6fdcd539b3bba64e66d7120f38d6b2993945d209d6f6` | `0x2f2677a1688c499ee803894fd1911c9d8603b0ced62e8e2640ec78b32efb22ab` | `0xf7aa480aa5b3dddbdbd69f2ff6445cb6b1504e787a847d8f279f96650dd02554` |
| proof-batch-07 | 4430 | Completed | 5 | `0xf86d64a3300d1ea7c0c5cfdff04f6a527b4fdb50bf8f7f856ed621b0d949d0ee` | `0x70c8e07c8042d67a6e450f3282beae0461dcd74cb6e427cee0d1067e4c34064b` | `0xdced254aafe4bda4455ed18949b04a7bc45d7f014d846408c8cf8f10b085510a` | `0x1002dfe107aa7c9327a46eb734b07e88ee6c3c3cc629f5aab28171061cfb1025` | `0x6d92f4e0a9dc68050e4cf552952584ce779c0cdb7bbf183c41a2edce92e3a7c4` | `0x8261f35f416f2b5e5980a68d3db9e1da876fa65f28a857257caeb499be5892f4` |
| proof-batch-08 | 4431 | Completed | 5 | `0xbe798b110a01461bcc05ea07828613a3f358eeedb85e9d1619532e46204fdefd` | `0x19ffafe546ad7045b54b95600adc9018940ff66b6949c58f35ad264dc04527fc` | `0xa12e71625f2e0fc96ff9fc32d411df9747c215637d837af53be014c1b8b5562a` | `0xca233a8c2c4902c88a6e5b1bd940a0a2ef37f67fb65a38d15ea071dc73238b27` | `0xbf91c2d5ffd4fb35e9ba2e96fff7701758ed57ab480579e65f04bbac938b10a1` | `0x49945fcf6c8acd9c4627546b9c5886ef8f9d8b5178909273979ce687a32d23a7` |
| proof-batch-09 | 4432 | Completed | 5 | `0xab2623fe60b4fe4dae9e5aecbb95fa1a54a5ccc28fd3fc7d962d6ae813f05ec1` | `0x019e9e6533f8612e01b682b740de7d966201e4426d319b8a00424db63f8ec282` | `0x143b3e425ef9ecde2c0b726811ce99a4a3cd9f420df49ecbb9c183c6a906da3a` | `0x034f29933c8c3e21e46e00ed0ddb7d2683b733f1fe80415d0e2e24a759f7a7ab` | `0x835fec225fefaf26c27aa4340a7f454510f54da578d55b9aa66b5a220f38e915` | `0xb8203de80e6c59b63d7285a9fdfb65371152fed0a452588e24718ccb20b8c135` |
| proof-batch-10 | 4433 | Completed | 5 | `0x14578a3802a24e8348fc89f525f57d311490ccdf2f9919a8bd5118b4eadc75ac` | `0x74a71c6e222d9c1479a51043a038eeedeb6afe39ec73bb7da796d3a8cea42ab6` | `0xe16796aadb58bc68d2760e55f5bdca2cb7fdf603df3c2655556daecce2335a0d` | `0xd0ec9701f77f507fe39dc0e21030e74f92ccc5b30810cc3d3e8a0d6c7ae86d45` | `0xbda170c8dc1fb3f3354d5a8688d85ba013d671b470a47829c42ffd34a69682d4` | `0xe6b7707f03b7d694d811f900a58ee67f0b1dbef6de53c62a73ff4d5b5a2c2345` |

## Micropayment Action Breakdown

| action | calls | price_per_call_usdc | total_usdc |
|---|---:|---:|---:|
| literature/search | 10 | 0.002 | 0.020 |
| drugdb/fetch | 10 | 0.002 | 0.020 |
| pathway/analyze | 10 | 0.002 | 0.020 |
| red-team/critics | 10 | 0.002 | 0.020 |
| review-service/review | 10 | 0.002 | 0.020 |

## Notes

- The run summary already includes the relevant ERC-8183 lifecycle milestones for each job.
- `approve` appears here as the ERC-20 authorization step that enables escrow funding.
