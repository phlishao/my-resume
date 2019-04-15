import React from "react";
import SectionTitle from "./SectionTitle";
import SectionContent from "./SectionContent";
import SectionItem from "./SectionItem";
import DescriptionList from "./DescriptionList";
import "./index.less";

class Section extends React.Component {
  //   static defaultProps = {
  //     data: {
  //       name: "技能111",
  //       subName: "Skill",
  //       item: [
  //         {
  //           title: "web前端",
  //           timeline: "2016.7.15-2018.3.5",
  //           description: [
  //             {
  //               title: "react技术栈",
  //               data: [
  //                 "熟悉React项目(Web端)的搭建与应用开发",
  //                 "能够进行常见的React性能优化与错误排查",
  //                 "写过基于React的UI组件库,了解最佳实践",
  //                 "构建基于React的前端微服务技术方案"
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           title: "HTML / CSS / JavaScript",
  //           timeline: "2016.7.15-2018.3.7",
  //           description: [
  //             {
  //               title: "react技术栈",
  //               data: [
  //                 "熟悉React项目(Web端)的搭建与应用开发",
  //                 "能够进行常见的React性能优化与错误排查",
  //                 "写过基于React的UI组件库,了解最佳实践",
  //                 "构建基于React的前端微服务技术方案"
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   };
  render() {
    const { name, subName, item, icon } = this.props.data;
    return (
      <section className="sec">
        <SectionTitle name={name} subName={subName} icon={icon} />
        <SectionContent>
          {item.map((c, index) => {
            return (
              <SectionItem
                title={c.title}
                timeline={c.timeline}
                key={index}
                icon={c.icon}
              >
                {c.description.map((desc, subIndex) => {
                  return (
                    <DescriptionList
                      key={subIndex}
                      title={desc.title}
                      data={desc.data}
                    />
                  );
                })}
              </SectionItem>
            );
          })}
        </SectionContent>
      </section>
    );
  }
}
export default Section;
