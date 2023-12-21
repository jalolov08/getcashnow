import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './faqAccordion.style.css';
import '../FaqTabs/faqTabs.style.css'
import TabContentTitle from '../FaqTabs/TabContentTitle/tabContentTitle.component';
import { orgData } from '../../data/orgData';
export default function FaqAccordion() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Займы онлайн
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='tab_content'>
                        <TabContentTitle title={"Круглосуточные займы срочно и без отказа"} />
                        <p className='tab_content_subtitle'>Мы постоянно мониторим самые свежие предложения от МФО, а также нами ведется статистика одобрений займов и наиболее лояльные и выгодные из них появляются в нашем списке.
                        </p>
                        <p className='tab_content_subtitle'>Каждое предложение, которое вы видите на данной странице, прошло строгий отбор и протестировано нашими специалистами. Именно здесь вы можете решить свои финансовые вопросы, и получить срочно займ онлайн на карту, круглосуточно, и без отказа.</p>
                        <ul className='tab_list'>
                            <b className='tab_list_title'>Что нужно сделать, чтобы получить займ:</b>
                            <li className='tab_list_item'>Выберите одно или лучше сразу несколько продложений МФО, перейдите на сайт кредитной организации и определитесь с суммой займа.</li>
                            <li className='tab_list_item'>Заполняете заявку, представляющую собой анкету с небольшим количеством вопросов. Отправьте заявку и ожидайте ответ.</li>
                            <li className='tab_list_item'>В случае одобрения вы получите смс от МФО. Проверьте одобренную сумму и при согласии с условиями займа подтвердите его получение.</li>
                            <li className='tab_list_item'>После завершения процесса оформления микрокредита деньги поступят на вашу карту. Проверьте зачисленную сумму.</li>
                        </ul>
                        <p className='tab_content_subtitle'>Вы можете заполнить несколько кредитных заявок для увеличения шанса получения займа.</p>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Условия оформления
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='tab_content'>
                        <TabContentTitle title={"Общие условия оформления займов"} />
                        <ul className='tab_list'>
                            <li className='tab_list_item'>Гражданство РФ, возраст от 18 лет, постоянное проживание в регионе оформления кредита, наличие источника дохода.</li>
                            <li className='tab_list_item'>Подтверждение дохода не требуется, получить займ можно с любой кредитной историей, по одному документу.</li>
                            <li className='tab_list_item'>Максимальная ставка по кредиту составляет 1% в день, максимальная годовая ставка равна 365%.</li>
                            <li className='tab_list_item'>Минимальный срок погашения кредита с продлением составляет 65 дней.</li>
                        </ul>
                        <b className='tab_content_subtitle'>Конечные условия оформления кредитов и займов Вы можете уточнить на сайте соответствующей кредитной организации.</b>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Ответственность за просрочку
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='tab_content'>
                        <TabContentTitle title={"Общие последствия невозврата займа"} />
                        <ul className='tab_list'>
                            <li className='tab_list_item'>В случае невозврата тела кредита и процентной ставки по кредиту в установленный договором срок, вы должны выплатить неустойку (штраф) за каждый день просрочки. Сумма штрафа составляет от 0,1% от суммы кредита (в зависимости от организации - кредитора).</li>
                            <li className='tab_list_item'>Взыскание долга происходит в рамках закона. Могут быть задействованы судебные инстанции и коллекторские агентства.</li>
                            <li className='tab_list_item'>Факт просрочки кредита передается в кредитное бюро. Задолженности могут негативно повлиять на ваш кредитный рейтинг, ухудшить вашу кредитную историю, что негативно отразится при оформлении новых кредитов в дальнейшем.</li>
                        </ul>
                        <b className='tab_content_subtitle'>Конечные последствия просрочки или невозврата займа Вы можете уточнить на сайте соответствующей кредитной организации.</b>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Информация о кредиторах
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className='tab_content'>
                        <TabContentTitle title={"Сведения о кредитных организациях"} />
                        <div className='tab_cards_cont'>
                            {orgData.map((item) => {
                                return (
                                    <div className='tab_card' key={item.id} style={{width:"100%"}}>
                                        <b className='tab_card_title'>{item.title}</b>
                                        <ul className='tab_card_list'>
                                            <li className='tab_card_list_item'>{item.address}</li>
                                            <li className='tab_card_list_item'>Телефон:{item.phone}</li>
                                            <li className='tab_card_list_item'>Email:{item.email}</li>
                                            <li className='tab_card_list_item'>Годовая процентная ставка (APR):{item.percent}</li>
                                            <li className='tab_card_list_item'>Срок: от {item.termFrom} до {item.termTo}</li>
                                            <li className='tab_card_list_item'>Лицензия: {item.license} от {item.licenseDate}</li>



                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}
