import PopularServices from '@/components/PopularServices';
import Link from 'next/link';
import styles from './page.module.css';
import { 
    InspectionIcon, 
    MoppingIcon, 
    BathroomIcon, 
    QualityIcon,
    VacuumIcon,
    WindowIcon
  } from 'public/icons/Icons';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function HomePage() {
    return (
        <div className={styles.container}>
            {/* Верхній блок з візуальним елементом */}
            <div className={styles.heroBlock}>
                {/* Текст та картинка в одному рядку */}
                <div className={styles.heroContent}>
                    {/* Текст зліва */}
                    <div className={styles.heroText}>
                        <h1 className={styles.title}>
                            Відкривай <span className={styles.highlight}>нові можливості</span> для вашого дому
                        </h1>
                    </div>
                    {/* Картинка справа */}
                    <div className={styles.heroImage}>
                        <img
                            src="https://i.pinimg.com/originals/e2/26/4f/e2264f3abaf2662c5baba99229df12e8.png"
                            alt="Cleaning Services"
                            className={styles.image}
                        />
                    </div>
                </div>
                
                {/* Опис та кнопка на всю ширину */}
                <div className={styles.descriptionBlock}>
                    <p className={styles.description}>
                        Замовляйте професійні клінінгові послуги для вашого дому чи офісу. Ми гарантуємо якість та комфорт.
                    </p>
                    <Link href="/main/services">
                        <button className={styles.button}>
                            Дізнатися більше
                        </button>
                    </Link>
                </div>
            </div>

            {/* Блок процесу прибирання */}
            <section className={styles.processSection}>
                <h2 className={styles.processTitle}>Наші клінінгові послуги</h2>
                <div className={styles.processCards}>
                    {/* Картка 1 */}
                    <div className={`${styles.processCard} ${styles.card1}`}>
                        <div className={styles.cardIconContainer}>
                            <InspectionIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Огляд приміщення</h3>
                            <p className={styles.cardDescription}>
                                Детальна оцінка об'єкта та складання плану прибирання
                            </p>
                        </div>
                    </div>

                    {/* Картка 2 */}
                    <div className={`${styles.processCard} ${styles.card2}`}>
                        <div className={styles.cardIconContainer}>
                            <MoppingIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Мия підлоги</h3>
                            <p className={styles.cardDescription}>
                                Ретельне миття підлоги спеціальними засобами
                            </p>
                        </div>
                    </div>

                    {/* Картка 3 */}
                    <div className={`${styles.processCard} ${styles.card3}`}>
                        <div className={styles.cardIconContainer}>
                            <BathroomIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Чистка санвузлів</h3>
                            <p className={styles.cardDescription}>
                                Дезінфекція та видалення вапняного нальоту
                            </p>
                        </div>
                    </div>

                    {/* Картка 4 */}
                    <div className={`${styles.processCard} ${styles.card4}`}>
                        <div className={styles.cardIconContainer}>
                            <QualityIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Контроль якості</h3>
                            <p className={styles.cardDescription}>
                                Фінальна перевірка результатів прибирання
                            </p>
                        </div>
                    </div>

                    {/* Картка 5 */}
                    <div className={`${styles.processCard} ${styles.card5}`}>
                        <div className={styles.cardIconContainer}>
                            <VacuumIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Пилососіння</h3>
                            <p className={styles.cardDescription}>
                                Видалення пилу з килимів, меблів та важкодоступних місць
                            </p>
                        </div>
                    </div>

                    {/* Картка 6 */}
                    <div className={`${styles.processCard} ${styles.card6}`}>
                        <div className={styles.cardIconContainer}>
                            <WindowIcon className={styles.cardIcon} />
                            <div className={styles.iconDivider}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Мия вікон</h3>
                            <p className={styles.cardDescription}>
                                Очищення вікон, дзеркал та скляних поверхонь
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Популярні послуги */}
            <h2 className={styles.popularTitle}>Популярні послуги</h2>
            <PopularServices />

            {/* Секція про команду */}
            <section className={styles.teamSection}>
                <h2 className={styles.teamTitle}>Наша команда</h2>
                <p className={styles.teamDescription}>
                    Ми — команда професіоналів, які забезпечують якісне прибирання для вашого дому чи офісу. 
                    Наші спеціалісти мають багаторічний досвід і використовують сучасне обладнання для досягнення найкращих результатів.
                </p>
                <div className={styles.teamContainer}>
                    {/* Учасник команди 1 */}
                    <div className={styles.teamCard}>
                        <img
                            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid&w=740"
                            alt="Team Member 1"
                            className={styles.teamImage}
                        />
                        <h3 className={styles.teamName}>Олена Іванова</h3>
                        <p className={styles.teamRole}>Спеціаліст з прибирання</p>
                    </div>

                    {/* Учасник команди 2 */}
                    <div className={styles.teamCard}>
                        <img
                            src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                            alt="Team Member 2"
                            className={styles.teamImage}
                        />
                        <h3 className={styles.teamName}>Андрій Петров</h3>
                        <p className={styles.teamRole}>Менеджер з якості</p>
                    </div>

                    {/* Учасник команди 3 */}
                    <div className={styles.teamCard}>
                        <img
                            src="https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg"
                            alt="Team Member 3"
                            className={styles.teamImage}
                        />
                        <h3 className={styles.teamName}>Марія Коваленко</h3>
                        <p className={styles.teamRole}>Фахівець з дезінфекції</p>
                    </div>

                    {/* Учасник команди 4 */}
                    <div className={styles.teamCard}>
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740"
                            alt="Team Member 4"
                            className={styles.teamImage}
                        />
                        <h3 className={styles.teamName}>Іван Сидоренко</h3>
                        <p className={styles.teamRole}>Технік з обладнання</p>
                    </div>
                </div>
            </section>
            
            {/* Секція з формою зворотного зв'язку */}
            <section className={styles.contactcontainer}>
                <div className={styles.contactForm}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.description}>
                    Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
                    </p>
                    <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="First name" />
                        </div>
                        <div className={styles.inputGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Last name" />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Email address" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Leave us a message"></textarea>
                    </div>
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="privacyPolicy" />
                        <label htmlFor="privacyPolicy">
                        I agree to our friendly <a href="#">privacy policy</a>
                        </label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                    </form>
                </div>

                <div className={styles.contactInfo}>
                    <img
                    src="https://img.freepik.com/free-photo/high-angle-home-3d-interior-design_23-2149647175.jpg"
                    alt="Contact Us"
                    className={styles.contactImage}
                    />

                    <div className={styles.infoItem}>
                    <Mail size={24} className={styles.icon} />
                    <div>
                        <h3>Email</h3>
                        <p>techteam@cleanpro.com</p>
                    </div>
                    </div>

                    <div className={styles.infoItem}>
                    <Phone size={24} className={styles.icon} />
                    <div>
                        <h3>Phone</h3>
                        <p>(123) 456-7890</p>
                    </div>
                    </div>

                    <div className={styles.infoItem}>
                    <MapPin size={24} className={styles.icon} />
                    <div>
                        <h3>Address</h3>
                        <p>123 Cleaning St, CleanCity, CL 45678</p>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
}