import { Tag } from "ant-design-vue";
import { useCssModule } from "vue";

interface TableType {
  key: string;
  name: string;
  sex: string;
  cloth: string;
  price: number;
  status: "热卖中" | "已售罄";
}

export const dataSource = [
  {
    key: "1",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "2",
    name: "佐罗",
    sex: "男",
    cloth: "领带",
    price: 640,
    status: "已售罄",
  },
  {
    key: "3",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "4",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "5",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "6",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "7",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "8",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "9",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "10",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
  {
    key: "11",
    name: "路飞",
    sex: "男",
    cloth: "西装",
    price: 600,
    status: "热卖中",
  },
];

export const useTableColumns = () => {
  const cssModule = useCssModule();
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      customRender: ({ text }: { text: string }) => {
        return (
          <div>
            {text}
            <span class={cssModule.redText}>[测试bodyCell]</span>
          </div>
        );
      },
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "衣服",
      dataIndex: "cloth",
      key: "cloth",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      sorter: (a: TableType, b: TableType) => a.price - b.price,
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      customRender: ({ text }: { text: string }) => {
        if (text === "热卖中") {
          return <Tag color="red">{text}</Tag>;
        } else {
          return <Tag color="default">{text}</Tag>;
        }
      },
    },
  ];
  const indexColumn = {
    title: "序号",
    dataIndex: "index",
    key: "index",
    customRender: ({ record, index }) => {
      console.log(
        "🚀 ~ file: utils.tsx ~ line 98 ~ useTableColumns ~ record",
        record,
        index
      );
      return (
        <div>
          <span class={cssModule.redText}>[测试bodyCell]</span>
        </div>
      );
    },
  };

  return { columns, indexColumns: [indexColumn, ...columns] };
};
