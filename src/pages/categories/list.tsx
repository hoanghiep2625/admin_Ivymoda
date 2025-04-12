import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const CategoryList = () => {
  const { tableProps } = useTable({
    resource: "categories",
    syncWithLocation: true,
  });

  // Nếu API trả về { docs: [], totalDocs: 3, ... }
  const data = (tableProps.dataSource as any)?.docs ?? [];

  return (
    <List>
      <Table
        {...tableProps}
        dataSource={Array.isArray(data) ? data : []}
        rowKey="_id"
      >
        <Table.Column dataIndex="name" title="Tên danh mục" />
        <Table.Column dataIndex="level" title="Cấp độ" />
        <Table.Column
          title="Hành động"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record._id} />
              <ShowButton hideText size="small" recordItemId={record._id} />
              <DeleteButton hideText size="small" recordItemId={record._id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
